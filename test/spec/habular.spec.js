/*global exports, define, require, __dirname, describe, it, expect, _, habular */
/*jscs: disable maximumLineLength */

(function (runTests) {

  'use strict';

  var absPath = null;

  // Run tests depending on current environment:

  // A global 'exports' object signifies CommonJS environment
  if (typeof exports !== 'undefined') {
    absPath = (function () {
      var joinPaths = require('path').join;
      return function (relPath) { return joinPaths(__dirname, relPath); };
    }());
    runTests(require('underscore'), require('../../habular.js'));
    return;
  }

  // A global 'define' method with an 'amd' property signifies the presence of an AMD loader
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'habular'], function (_, habular) {
      return runTests(_, habular);
    });
    return;
  }

  // Browser environment, without a module-framework
  runTests(_, habular);

}(function (_, habular) {
  'use strict';

  describe('Habular', function () {

    describe('when input is empty', function () {

      it('should generate a table that has 0 rows and 0 columns', function () {
        var table = habular.table([]);

        expect(table.getNumOfRows()).toBe(0); // table reports 0 rows
        expect(table.columns.length).toBe(0); // table has 0 columns
      });

    }); //


    describe('when input contains a single element', function () {

      it('should generate a single row and 0 columns, for input [{}]', function () {
        var table = habular.table([{}]);

        expect(table.getNumOfRows()).toBe(1); // table reports 1 row
        expect(table.columns.length).toBe(0); // table has 0 columns
      });

      it('should generate a single row and 1 \'cost\' column, for input [{ cost: 0 }]', function () {
        var table = habular.table([{ cost: 0 }]);

        expect(table.columns.length).toBe(1);          // table has 1 column
        expect(table.columns[0].name).toBe('cost');    // table has a 'cost' column
        expect(table.getNumOfRows()).toBe(1);          // table reports 1 row
        expect(table.columns[0].cells.length).toBe(1); // 'cost' column has 1 row
      });

      it('should generate a single row and 2 \'width\', \'height\' columns, for input [{ width: 0, height: 0 }]', function () {
        var
          table = habular.table([{ width: 0, height: 0 }]),
          wColumn = null,
          hColumn = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(wColumn = _(table.columns).find(function (column) { return column.name === 'width'; })).toBeDefined();  // table has a 'width' column
        expect(hColumn = _(table.columns).find(function (column) { return column.name === 'height'; })).toBeDefined(); // table has a 'height' column
        expect(table.getNumOfRows()).toBe(1); // table reports 1 row
        expect(wColumn.cells.length).toBe(1); // 'width' column has one row
        expect(hColumn.cells.length).toBe(1); // 'height' column has one row
      });

      it('should generate a single row and 0 columns, for input [[]]', function () {
        var table = habular.table([[]]);

        expect(table.columns.length).toBe(0); // table has 0 columns
        expect(table.getNumOfRows()).toBe(1); // table reports 1 row
      });

      it('should generate a single row and 1 \'index0\' column, for input [[0]]', function () {
        var table = habular.table([[0]]);

        expect(table.columns.length).toBe(1);          // table has 1 column
        expect(table.columns[0].name).toBe('index0');  // table has an 'index0' column
        expect(table.getNumOfRows()).toBe(1);          // table reports 1 row
        expect(table.columns[0].cells.length).toBe(1); // 'index0' column has 1 row
      });

      it('should generate a single row and 2 \'index0\', \'index1\' columns, for input [[0, 0]]', function () {
        var
          table = habular.table([[0, 0]]),
          index0Column = null,
          index1Column = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(index0Column = _(table.columns).find(function (column) { return column.name === 'index0'; })).toBeDefined(); // table has a 'index0' column
        expect(index1Column = _(table.columns).find(function (column) { return column.name === 'index1'; })).toBeDefined(); // table has a 'index1' column
        expect(table.getNumOfRows()).toBe(1);      // table reports 1 row
        expect(index0Column.cells.length).toBe(1); // 'index0' column has 1 row
        expect(index1Column.cells.length).toBe(1); // 'index1' column has 1 row
      });

      it('should generate a single row and 1 \'primitive\' column, for input [0]', function () {
        var table = habular.table([0]);

        expect(table.columns.length).toBe(1);            // table has 1 column
        expect(table.columns[0].name).toBe('primitive'); // table has a 'primitive' column
        expect(table.getNumOfRows()).toBe(1);            // table reports 1 row
        expect(table.columns[0].cells.length).toBe(1);   // 'primitive' column has 1 row
      });

    }); // when input contains a single element


    describe('when input contains N empty elements', function () {

      it('should generate N rows and 0 columns, for input [{}, {}]', function () {
        var table = habular.table([{}, {}]);

        expect(table.columns.length).toBe(0); // table has 0 columns
        expect(table.getNumOfRows()).toBe(2); // table reports 2 rows
      });

      it('should generate N rows and 0 columns, for input [[], []]', function () {
        var table = habular.table([[], []]);

        expect(table.columns.length).toBe(0); // table has 0 columns
        expect(table.getNumOfRows()).toBe(2); // table reports 2 rows
      });

      it('should generate N rows and 1 column \'primitive\', for input [0, 0]', function () {
        var table = habular.table([0, 0]);

        expect(table.columns[0].name).toBe('primitive'); // table has 1 'primitive' column
        expect(table.getNumOfRows()).toBe(2);            // table reports 2 rows
        expect(table.columns[0].cells.length).toBe(2);   // 'primitive' column has 2 rows
      });

    }); // when input contains N empty elements


    describe('when input contains N non-empty elements', function () {

      it('should generate N rows and 1 \'name\' column, for input [{ name: \'Ron\' }, { name: \'Leslie\' }]', function () {
        var table = habular.table([{ name: 'Ron' }, { name: 'Leslie' }]);

        expect(table.columns.length).toBe(1);       // table has 1 column
        expect(table.columns[0].name).toBe('name'); // table has 'name' column

        expect(table.getNumOfRows()).toBe(2);                   // table reports 2 rows
        expect(table.columns[0].cells.length).toBe(2);          // 'name' column has 2 cells
        expect(table.columns[0].cells[0].value).toBe('Ron');    // cell 0 of 'name' column has value 'Ron'
        expect(table.columns[0].cells[1].value).toBe('Leslie'); // cell 1 of 'name' column has value 'Leslie'
      });

      it('should generate N rows and 2 \'fName\', \'lName\' columns, for input [{ fName: \'Ron\', lName: \'Swanson\' }, { fName: \'Leslie\', lName: \'Knope\' }]', function () {
        var
          table = habular.table([
            { fName: 'Ron', lName: 'Swanson' },
            { fName: 'Leslie', lName: 'Knope' }
          ]),
          fNameColumn = null,
          lNameColumn = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(fNameColumn = _(table.columns).find(function (column) { return column.name === 'fName'; })).toBeDefined(); // table has 'fName' column
        expect(lNameColumn = _(table.columns).find(function (column) { return column.name === 'lName'; })).toBeDefined(); // table has 'lName' column

        expect(table.getNumOfRows()).toBe(2);     // table reports 2 rows
        expect(fNameColumn.cells.length).toBe(2); // 'fName' column has two cells
        expect(lNameColumn.cells.length).toBe(2); // 'lName' column has two cells

        expect(fNameColumn.cells[0].value).toBe('Ron');     // cell 0 of 'fName' column has value 'Ron'
        expect(fNameColumn.cells[1].value).toBe('Leslie');  // cell 1 of 'fName' column has value 'Leslie'

        expect(lNameColumn.cells[0].value).toBe('Swanson'); // cell 0 of 'lName' column has value 'Swanson'
        expect(lNameColumn.cells[1].value).toBe('Knope');   // cell 1 of 'lName' column has value 'Knope'
      });

      it('should generate N rows and 1 \'index0\' column, for input [[\'Ron\'], [\'Leslie\']]', function () {
        var table = habular.table([['Ron'], ['Leslie']]);

        expect(table.columns.length).toBe(1);         // table has 1 column
        expect(table.columns[0].name).toBe('index0'); // table has 'index0' column

        expect(table.getNumOfRows()).toBe(2);                   // table reports 2 rows
        expect(table.columns[0].cells.length).toBe(2);          // 'index0' column has 2 cells
        expect(table.columns[0].cells[0].value).toBe('Ron');    // cell 0 of 'index0' column has value 'Ron'
        expect(table.columns[0].cells[1].value).toBe('Leslie'); // cell 1 of 'index0' column has value 'Leslie'
      });

      it('should generate N rows and 2 \'index0\', \'index1\' columns, for input [[\'Ron\', \'Swanson\'], [\'Leslie\', \'Knope\']]', function () {
        var
          table = habular.table([['Ron', 'Swanson'], ['Leslie', 'Knope']]),
          index0Column = null,
          index1Column = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(index0Column = _(table.columns).find(function (column) { return column.name === 'index0'; })).toBeDefined(); // table has 'index0' column
        expect(index1Column = _(table.columns).find(function (column) { return column.name === 'index1'; })).toBeDefined(); // table has 'index1' column

        expect(table.getNumOfRows()).toBe(2);      // table reports 2 rows
        expect(index0Column.cells.length).toBe(2); // 'index0' column has two cells
        expect(index1Column.cells.length).toBe(2); // 'index1' column has two cells

        expect(index0Column.cells[0].value).toBe('Ron');     // cell 0 of 'index0' column has value 'Ron'
        expect(index0Column.cells[1].value).toBe('Leslie');  // cell 1 of 'index0' column has value 'Leslie'

        expect(index1Column.cells[0].value).toBe('Swanson'); // cell 0 of 'index1' column has value 'Swanson'
        expect(index1Column.cells[1].value).toBe('Knope');   // cell 1 of 'index1' column has value 'Knope'
      });

    }); // when input contains N non-empty elements


    describe('when input is non-uniform', function () {

      it('should generate undefined cells where a value is not applicable, for input of object elements', function () {
        var
          table = habular.table([{ fName: 'Ron' }, { lName: 'Knope' }]),
          fNameColumn = null,
          lNameColumn = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(fNameColumn = _(table.columns).find(function (column) { return column.name === 'fName'; })).toBeDefined(); // table has 'fName' column
        expect(lNameColumn = _(table.columns).find(function (column) { return column.name === 'lName'; })).toBeDefined(); // table has 'lName' column

        expect(table.getNumOfRows()).toBe(2); // table reports 2 rows

        expect(fNameColumn.cells[0].value).toBe('Ron');   // column 'fName' has cell 0 with value 'Ron'
        expect(fNameColumn.cells[1]).toBeUndefined();     // column 'fName', cell 1 is undefined

        expect(lNameColumn.cells[0]).toBeUndefined();     // column 'lName', cell 0 is undefined
        expect(lNameColumn.cells[1].value).toBe('Knope'); // column 'lName' has cell 1 with value 'Knope'
      });

      it('should generate undefined cells where a value is not applicable, for input of array elements', function () {
        var
          table = habular.table([['Ron'], ['Leslie', 'Knope']]),
          index0Column = null,
          index1Column = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        expect(index0Column = _(table.columns).find(function (column) { return column.name === 'index0'; })).toBeDefined(); // table has 'index0' column
        expect(index1Column = _(table.columns).find(function (column) { return column.name === 'index1'; })).toBeDefined(); // table has 'index1' column

        expect(table.getNumOfRows()).toBe(2); // table reports 2 rows

        expect(index0Column.cells[0].value).toBe('Ron');    // column 'index0' has cell 0 with value 'Ron'
        expect(index0Column.cells[1].value).toBe('Leslie'); // column 'index0', has cell 1 with value 'Leslie'

        expect(index1Column.cells[0]).toBeUndefined();      // column 'index1', cell 0 is undefined
        expect(index1Column.cells[1].value).toBe('Knope');  // column 'index1' has cell 1 with value 'Knope'
      });

      it('should generate undefined cells where a value is not applicable, for input of mixed-type elements', function () {
        var
          table = habular.table([{name: 'Ron'}, ['Leslie'], 42]),
          nameColumn = null,
          index0Column = null,
          primitiveColumn = null;

        expect(table.columns.length).toBe(3); // table reports 3 columns
        expect(nameColumn = _(table.columns).find(function (column) { return column.name === 'name'; })).toBeDefined();           // table has 'name' column
        expect(index0Column = _(table.columns).find(function (column) { return column.name === 'index0'; })).toBeDefined();       // table has 'index0' column
        expect(primitiveColumn = _(table.columns).find(function (column) { return column.name === 'primitive'; })).toBeDefined(); // table has 'primitive' column

        expect(table.getNumOfRows()).toBe(3); // table reports 3 rows

        expect(nameColumn.cells[0].value).toBe('Ron'); // column 'name' has cell 0 with value 'Ron'
        expect(nameColumn.cells[1]).toBeUndefined();   // column 'name', cell 1 is undefined
        expect(nameColumn.cells[2]).toBeUndefined();   // column 'name', cell 2 is undefined

        expect(index0Column.cells[0]).toBeUndefined();      // column 'index0', cell 0 is undefined
        expect(index0Column.cells[1].value).toBe('Leslie'); // column index0 has cell 1 with value 'Leslie'
        expect(index0Column.cells[2]).toBeUndefined();      // column 'index0', cell 2 is undefined

        expect(primitiveColumn.cells[0]).toBeUndefined(); // column 'primitive', cell 0 is undefined
        expect(primitiveColumn.cells[1]).toBeUndefined(); // column 'primitive', cell 1 is undefined

      });

    }); // when input is non-uniform


    describe('when input causes column-name clashes', function() {

      it('should not confuse columns, for input of {indexN: ... } and array', function () {
        var
          table = habular.table([{ index0: 'Ron' }, ['Knope' ]]),
          sources = null;

        expect(table.columns.length).toBe(2); // 'table has 2 columns
        sources = [table.columns[0].source, table.columns[1].source];

        expect(sources).toContain('objectProperty'); // One of the columns is objectProperty-sourced
        expect(sources).toContain('arrayElement');   // One of the columns is arrayElement-sourced
      });

      it('should not confuse columns, for input of {primitive: ...} and primitive', function () {
        var
          table = habular.table([{ primitive: 'Ron' }, 0]),
          sources = null;

        expect(table.columns.length).toBe(2); // table has 2 columns
        sources = [table.columns[0].source, table.columns[1].source];

        expect(sources).toContain('objectProperty'); // One of the columns is objectProperty-sourced
        expect(sources).toContain('primitive');      // One of the columns is primitive-sourced
      });

    }); // when input causes column-name clashes


    describe('in respect to generated cell value', function () {

      it('should generate column with cell of value 42, for input [{ answer: 42 }]', function () {
        var table = habular.table([{ answer: 42 }]);

        expect(table.columns[0]).toBeDefined();           // table has column
        expect(table.columns[0].cells[0].value).toBe(42); // cell has value 42
      });

      it('should generate column with cell of value \'Ron Swanson\', for input [{ name: \'Ron Swanson\' }]', function () {
        var table = habular.table([{ name: 'Ron Swanson' }]);

        expect(table.columns[0]).toBeDefined();                      // table has column
        expect(table.columns[0].cells[0].value).toBe('Ron Swanson'); // cell has value 'Ron Swanson'
      });

      it('should generate column with cell of value true, for input [{ isTested: true }]', function () {
        var table = habular.table([{ isTested: true }]);

        expect(table.columns[0]).toBeDefined();             // table has column
        expect(table.columns[0].cells[0].value).toBe(true); // cell has value true
      });

      it('should generate column with cell of value null, for input [{ bogus: null }]', function () {
        var table = habular.table([{ bogus: null }]);

        expect(table.columns[0]).toBeDefined();             // table has column
        expect(table.columns[0].cells[0].value).toBe(null); // cell has value null
      });

      it('should generate column with cell that has the original array as value, for input [{ stuff: [...] }]', function () {
        var
          theStuff = ['one', '2', 3],
          table = habular.table([{ stuff: theStuff }]);

        expect(table.columns[0]).toBeDefined();                 // table has column
        expect(table.columns[0].cells[0].value).toBe(theStuff); // cell has the original array as value
      });

      it('should generate column with cell that has the original object as value, for input [{ things: {...} }]', function () {
        var
          theThings = {one: 'one', two: '2', three: 3},
          table = habular.table([{ things: theThings }]);

        expect(table.columns[0]).toBeDefined();                  // table has column
        expect(table.columns[0].cells[0].value).toBe(theThings); // cell has the original object as value
      });

    }); // in respect to generated cell value


    describe('in respect to generated metadata', function () {

      it('should set column source to \'objectProperty\', for input [{ cost: 0 }]', function () {
        var table = habular.table([{ cost: 0 }]);

        expect(table.columns[0].source).toBe('objectProperty'); // column has source 'objectProperty'
      });

      it('should set column source to \'arrayElement\', for input [[0]]', function () {
        var table = habular.table([[0]]);

        expect(table.columns[0].source).toBe('arrayElement'); // column has source 'arrayElement'
      });

      it('should set column source to \'primitive\', for input [0]', function () {
        var table = habular.table([0]);

        expect(table.columns[0].source).toBe('primitive'); // column has source 'primitive'
      });

      it('should set cell type to \'number\', for input [{ answer: 42 }]', function () {
        var table = habular.table([{ answer: 42 }]);

        expect(table.columns[0].cells[0].type).toBe('number'); // cell has type 'number'
      });

      it('should set cell type to \'string\', for input [{ name: \'Ron Swanson\' }]', function () {
        var table = habular.table([{ name: 'Ron Swanson' }]);

        expect(table.columns[0].cells[0].type).toBe('string'); // cell has type 'string'
      });

      it('should set cell type to \'boolean\', for input [{ isTested: true }]', function () {
        var table = habular.table([{ isTested: true }]);

        expect(table.columns[0].cells[0].type).toBe('boolean'); // cell has type 'boolean'
      });

      it('should set cell type to \'null\', for input [{ bogus: null }]', function () {
        var table = habular.table([{ bogus: null }]);

        expect(table.columns[0].cells[0].type).toBe('null'); // cell has type 'null'
      });

      it('should set cell type to \'array\', for input [{ stuff: [...] }]', function () {
        var
          theStuff = ['one', '2', 3],
          table = habular.table([{ stuff: theStuff }]);

        expect(table.columns[0].cells[0].type).toBe('array'); // cell has type 'array'
      });

      it('should set cell type to \'object\', for input [{ things: {...} }]', function () {
        var
          theThings = {one: 'one', two: '2', three: 3},
          table = habular.table([{ things: theThings }]);

        expect(table.columns[0].cells[0].type).toBe('object'); // cell has type 'object'
      });

      it('should decorate column as \'expandable\' iff it contains a non-primitive cell', function() {

        var
          i, table,

          // inputs that should be converted into 'c'-column-expandable tables
          f = [
            [{c: {}}],         // columns of object-cells are expandable
            [{c: []}],         // columns of array-cells are expandable
            [{c: 0}, {c: {}}], // columns which contain at least one object- ..
            [{c: 0}, {c: []}]  // .. or array-cell are expandable
          ],

          // inputs that should be converted into non-'c'-column-expandable tables
          n = [ // columns that only contain primitive values are non-expandable
            [{c: 42}],
            [{c: 'Ron Swanson'}],
            [{c: true}],
            [{c: null}]
          ];

        for (i = f.length - 1; i >= 0; --i) {
          table = habular.table(f[i]);
          expect(table.columns[0].isExpandable).toBe(true);
        }

        for (i = n.length - 1; i >= 0; --i) {
          table = habular.table(n[i]);
          expect(table.columns[0].isExpandable).toBe(false);
        }

      });

    }); // in respect to generated metadata


    describe('in respect to helper methods', function() {

      it('should implement access to specific rows', function() {
        var table = habular.table([{cost: 0}, [0], 0]);

        expect(table.getRow(0)).toEqual([table.columns[0].cells[0], table.columns[1].cells[0], table.columns[2].cells[0]]);
        expect(table.getRow(1)).toEqual([table.columns[0].cells[1], table.columns[1].cells[1], table.columns[2].cells[1]]);
        expect(table.getRow(2)).toEqual([table.columns[0].cells[2], table.columns[1].cells[2], table.columns[2].cells[2]]);
      });

    }); // in respect to helper methods

  });

}));
