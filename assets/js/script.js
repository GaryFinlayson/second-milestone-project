
$.ajax({
    url: 'assets/data/CountriesOfEurope.csv',
    dataType: 'text',
  }).done(successFunction);

  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var html = '<table>';
    for (var row = 0; row < allRows.length; row++) {
        if (row === 0) {
          html += '<thead>';
          html += '<tr>';
        } else {
          html += '<tr>';
        };
        var rowCells = allRows[row].split(',');
        for (var cell = 0; cell < rowCells.length; cell++) {
          if (row === 0) {
            html += '<th>';
            html += rowCells[cell];
            html += '</th>';
          } else {
            html += '<td>';
            html += rowCells[cell];
            html += '</td>';
          };
        };
        if (row === 0) {
          html += '</tr>';
          html += '</thead>';
          html += '<tbody>';
        } else {
          html += '</tr>';
        };
    };
    html += '</tbody>';
    html += '</table>';
    $('#table').append(html);
 };
