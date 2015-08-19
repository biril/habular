//     Habular v0.0.1
//
//     https://github.com/biril/habular
//     Licensed under the MIT License
//     Copyright (c) 2014-2015 Alex Lambiris

/*global exports, define, require, _ */
(function (root, createModule) {
  'use strict';

  // Export Habular module depending on current environment:

  // A global 'exports' object signifies CommonJS environment
  if (typeof exports !== 'undefined') {
    return createModule(root, exports, require('underscore'));
  }

  // A global 'define' method with an 'amd' property signifies the presence of an AMD loader
  if (typeof define === 'function' && define.amd) {
    return define(['underscore', 'exports'], function (_, exports) {
      return createModule(root, exports, _);
    });
  }

  // Browser environment, without an AMD module loader
  root.habular = createModule(root, {}, _);

  // Attach a `noConflict` onto the `habular` global
  root.habular.noConflict = (function () {

    // Save a reference to the previous value of 'habular', so that it can be restored
    //  later on, if 'noConflict' is used
    var previousHabular = root.habular;

    // Run in no-conflict mode, setting the `habular` global to to its previous value.
    //  Returns `habular`
    return function () {
      var habular = root.habular;
      root.habular = previousHabular;
      habular.noConflict = function () { return habular; };
      return habular;
    };
  }());

}(this, function (root, habular, _) {

  'use strict';

  var

    //
    table = null,

    //
    getType = function (value) {
      if (_.isNumber(value))  { return 'number'; }
      if (_.isString(value))  { return 'string'; }
      if (_.isBoolean(value)) { return 'boolean'; }
      if (_.isNull(value))    { return 'null'; }
      if (_.isArray(value))   { return 'array'; }
      if (_.isObject(value))  { return 'object'; }
    },

    // A value is converted into a table cell, a hash which contains the value itself as well
    //  as the value's type
    convertToCell = function (value) {
      return { value: value, type: getType(value) };
    },

    // Create column of specified name and source
    createColumn = function (name, source) {
      return {
        name: name,
        source: source,
        isExpandable: false, // Begins its lifetime as non-expandable
        cells: []
      };
    },

    // Append a row, generated from an object. The object's keys will function as table columns.
    //  Such columns will be created for any key for which a column doesn't already exist
    appendObjectRepresentationToTable = function (object, rowIndex) {
      _(object).each(function (value, key) {
        var
          column = _(table.columns).find(function (column) {
            return column.name === key && column.source === 'objectProperty';
          }),
          cell = convertToCell(value);
        column || table.columns.push(column = createColumn(key, 'objectProperty'));
        column.cells[rowIndex] = cell;
        column.isExpandable ||
          (column.isExpandable = cell.type === 'object' || cell.type === 'array');
      });
    },

    // Append a row generated from an array. The array's indices will function as table columns.
    //  That is to say, for each array index n, a column named 'index:n' will be appended to the
    //  table, if it doesn't already exist
    appendArrayRepresentationToTable = function (array, rowIndex) {
      _(array).each(function (element, index) {
        var
          key = 'index' + index,
          column = _(table.columns).find(function (column) {
            return column.name === key && column.source === 'arrayElement';
          }),
          cell = convertToCell(element);
        column || table.columns.push(column = createColumn(key, 'arrayElement'));
        column.cells[rowIndex] = cell;
        column.isExpandable ||
          (column.isExpandable = cell.type === 'object' || cell.type === 'array');
      });
    },

    // Append a row generated from a single primitive value. This row will naturally contain a
    //  single cell belonging to column 'primitive'. The latter will be appended to the table
    //  if it doesn't already exist
    appendPrimitiveRepresentationToTable = function (primitive, rowIndex) {
      var
        column = _(table.columns).find(function (column) {
          // There can be only one primitive-sourced column
          return column.source === 'primitive';
        }),
        cell = convertToCell(primitive);
      column || table.columns.push(column = createColumn('primitive', 'primitive'));
      column.cells[rowIndex] = cell;
    };

  // Return the habular
  return _.extend(habular, {

    //
    asTable: function (array) {
      table = { columns: [] };

      _(array).each(function (element, index) {
        (function () {
          if (_.isArray(element)) { return appendArrayRepresentationToTable; }
          if (_.isObject(element)) { return appendObjectRepresentationToTable; }
          return appendPrimitiveRepresentationToTable;
        }())(element, index);
      });

      table.getNumOfRows = (function (numOfRows) {
        return function () { return numOfRows; };
      }(array.length));

      table.getRow = function (index) {
        return _(table.columns).map(function (column) { return column.cells[index]; });
      };

      return table;
    }

  });

}));
