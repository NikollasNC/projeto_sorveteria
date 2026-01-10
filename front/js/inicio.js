google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Dia', 'Receita', { role: 'style' }],
        ['Dom', 420.30, '#b87333'],
        ['Seg', 120.73, '#b87333'],
        ['Ter', 130.18, '#b87333'],
        ['Qua', 100.10, '#b87333'],
        ['Qui', 220.00, '#b87333'],
        ['Sex', 343.40, '#b87333'],
        ['Sáb', 520.20, '#b87333']
    ]);

    var options = {
        backgroundColor: 'transparent',
        'legend': 'none',

        vAxis: {
          textStyle: {
            color: '#b87333',
            bold: false,
            italic: false
          }
        }
    };

    var visualization = new google.visualization.ColumnChart(document.getElementById('grafico1'));
    visualization.draw(data, options);
}