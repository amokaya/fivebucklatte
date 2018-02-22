/* amokaya LLC */
google.charts.load('current', {'packages':['treemap']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Region', 'Market Risk', 'Credit Risk'],
          ['Global',    null,                 900,                               100],
          ['Americas',   'Global',             450,                               50],
          ['EMEA',    'Global',             100,                               30],
          ['Asia',      'Global',             240,                               25],
          ['Australia', 'Asia',             0,                               400],
          ['Africa',    'Global',             0,                               0],
          ['Brazil',    'Americas',            11,                              10],
          ['USA',       'Americas',            52,                              31],
          ['Mexico',    'Americas',            24,                              12],
          ['Canada',    'Americas',            16,                              -23],
          ['France',    'EMEA',             42,                              -11],
          ['Germany',   'EMEA',             31,                              -2],
          ['Sweden',    'EMEA',             22,                              -13],
          ['Italy',     'EMEA',             17,                              4],
          ['UK',        'EMEA',             21,                              -5],
          ['China',     'Asia',               36,                              4],
          ['Japan',     'Asia',               20,                              -12],
          ['India',     'Asia',               40,                              63],
          ['Laos',      'Asia',               4,                               34],
          ['Mongolia',  'Asia',               1,                               -5],
          ['Iran',      'EMEA',               18,                              13],
          ['Pakistan',  'Asia',               11,                              -52],
          ['Egypt',     'Africa',             21,                              0],
          ['S. Africa', 'Africa',             30,                              43],
          ['Sudan',     'Africa',             12,                              2],
          ['Congo',     'Africa',             10,                              12],
          ['Zaire',     'Africa',             8,                               10]
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

	var options = {
	  highlightOnMouseOver: true,
          minColor: '#00ff00',
          midColor: '#9ebcda',
          maxColor: '#edf8fb',
          headerHeight: 15,
          fontColor: 'black',
          showScale: false
        };

        tree.draw(data, options); 
      }

