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

  var data2 = google.visualization.arrayToDataTable([
    ['Ano', 'Receita', { role: 'style' }],
    ['2022', 70074.50, '#C0213C'],
    ['2023', 82000.20, '#C0213C'],
    ['2024', 79512.55, '#C0213C'],
    ['2025', 80120.30, '#C0213C'],
    ['2026', 87520.00, '#C0213C']
  ]);

  var data3 = google.visualization.arrayToDataTable([
    ['Sorvete', 'Quantidade'],
    ['Morango', 11],
    ['Chocolate', 10],
    ['Pistache', 5],
    ['Flocos', 6],
    ['Chocomenta', 3],
    ['Napolitano', 6]
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

  var options2 = {
    backgroundColor: 'transparent',
    'legend': 'none',
    
    vAxis: {
      textStyle: {
        color: '#C0213C',
        bold: false,
        italic: false
      }
    }
  };
  
  var options3 = {
    backgroundColor: 'transparent',
    title: 'Porcentagem de consumo',
    pieHole: 0.4,
  };

  var visualization = new google.visualization.ColumnChart(document.getElementById('grafico1'));
  var visualization2 = new google.visualization.ColumnChart(document.getElementById('grafico2'));
  var visualization3 = new google.visualization.PieChart(document.getElementById('consumo_grafico'));
  visualization.draw(data, options);
  visualization2.draw(data2, options2);
  visualization3.draw(data3, options3);
}