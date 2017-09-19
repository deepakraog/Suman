class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope,$mdDialog) {
        'ngInject';

        var vm = this;
       google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawPieChart);
       google.charts.setOnLoadCallback(drawBarChart);
      function drawPieChart() {
        var data = google.visualization.arrayToDataTable([
        	['Language', 'Tech (in percentage)'],
        	['Developer',  60],
          ['Designer',  40]
          
        ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: '',
        width:400,
        height:400,
        colors:['#000000','#b3b3b3'],
        slices: {  1: {offset: 0.1}
          }
        
      };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
      function drawBarChart(){
      	 var data = google.visualization.arrayToDataTable([
         ['Technology', 'Expert level', { role: 'style' }],
         ['HTML',92, '#82c3bc'],            // RGB value
         ['CSS', 89, '#e8c0b4'],            // English color name
         ['Javascript', 73, '#e7ba4d'],

       ['Jquery', 85, 'color: #cba36e' ],
       ['AngularJS', 75, 'color: #d35c5b' ],
       ['ReactJS', 60, 'color: #e5e4e2' ] // CSS-style declaration
      ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: ''
        
      };

        var chart = new google.visualization.ColumnChart(document.getElementById('barChart'));
        chart.draw(data, options);
      }



        
    }

    

    

}

export default HomeController;
