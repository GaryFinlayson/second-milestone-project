
$.get('assets/data/CountriesOfEurope.csv',function(data) {
    var html = '<"table">';
    var rows = data.split("\n");
    rows.forEach(function getvalues(tablerow) {
        html += "<tr>";
        var columns = tablerow.split(",");
        html += "<td>" + columns[0] + "</td>";
        html += "<td>" + columns[1] + "</td>";
        html += "<td>" + columns[2] + "</td>";
        html += "<td>" + columns[3] + "</td>";
        html += "<td>" + columns[4] + "</td>";
        html += "<td>" + columns[5] + "</td>";
        html += "<td>" + columns[6] + "</td>";
        html += "</tr>";
    })
    html += "</table>";
    $('#table').append(html);
});