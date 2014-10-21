/* jshint browser:true, jquery:true */
/* global habular, _ */

(function () {
  'use strict';

  var
    truncate = function (str, maxLength) {
      return str.length > maxLength ? str.substring(0, maxLength) + '..' : str;
    };

    $(function () {
      var
        $jsonInputForm = $('.jsonInput form'),
        $jsonInputFormInput = $jsonInputForm.find('input'),
        $useExampleButton = $jsonInputForm.find('.useExampleButton'),
        $tableOutput = $('.tableOutput'),
        buildHtmlTable = function (table) {
          var
            $table = $tableOutput.empty().html('<table><thead><tr></tr><thead><tbody></tbody></table>').find('table'),
            $tableBody = $table.find('tbody'),
            i, numOfRows,
            buildHtmlCell = function (cell) {
              var displayValue, htmlClass;
              if (_.isUndefined(cell)) {
                cell = { value: '', type: 'undefined' };
              }

              displayValue = cell.value;
              htmlClass = cell.type;
              switch (cell.type) {
                case 'null': displayValue = 'null'; break;
                case 'object': displayValue = 'object'; break;
                case 'array': displayValue = 'array'; break;
                case 'boolean': htmlClass += (cell.value ? ' true' : ' false');
              }

              displayValue = truncate(displayValue, 25);

              return '<td class="' + htmlClass + '">' + displayValue + '</td>';
            };

          $table.find('thead tr').append(_(table.columns).map(function (c) {
            return '<th ' + (c.isExpandable ? 'class="expandable"' : '') + '>' + c.name + '</th>';
          }).join(''));

          for(i = 0, numOfRows = table.getNumOfRows(); i < numOfRows; ++i) {
            $tableBody.append('<tr>' + _(table.getRow(i)).map(buildHtmlCell).join('') + '</tr>');
          }
        };

      $jsonInputForm.submit(function (event) {
        event.preventDefault();
        var table = null;

        try { table = habular.asTable(JSON.parse($jsonInputFormInput.val())); }
        catch (error) {
          return window.alert('oops: ' + error);
        }

        buildHtmlTable(table);
      });
      $useExampleButton.click(function (event) {
        event.preventDefault();
        $jsonInputFormInput.val(JSON.stringify(window.exampleData));
      });
  });

}());
