// first , npm install chart.js --save
// https://www.chartjs.org/docs/latest/getting-started/

// var Chart = require('chart.js');
//var myChart = // Bar chart
// new Chart(document.getElementById("bar-chart"), {
//     type: 'bar',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });
//identify the charts
var line = document.getElementById("line");
var bar = document.getElementById("bar");

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "dataset 1",
    fillColor: "rgba(255,0,255,0.2)",
    strokeColor: "rgba(255,0,255,0.8)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: "dataset 2",
    fillColor: "rgba(130,130,130,0.2)",
    strokeColor: "rgba(130,130,130,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27, 90]
  }]
};

var LineChart = new Chart(line).Line(data);
var BarChart = new Chart(bar).Bar(data);
