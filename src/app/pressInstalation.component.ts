import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'press-instalation',
  templateUrl: './pressInstalation.component.html',
  styleUrls: ['./pressInstalation.component.css']
})
export class PressInstalation implements OnInit  {
  constructor() { }

  ngOnInit() {
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['number of points obtained', 80],
        ['number of remaining points', 20]
      ]);   
       
      var options = { 
        title: '', 
        pieHole: 0.75,
        pieSliceBorderColor : 'transparent',
        pieSliceTextStyle: {
          color: 'transparent',
        }, 
        chartArea:{left:20,top:0,width:'100%',height:'100%'},
        legend: 'none',
        colors: ['#51a84f','#b4d8b4']
     };
      var chart = new google.visualization.PieChart(document.getElementById('piechart'));         
      chart.draw(data, options); 
      document.getElementById("textFirst").innerHTML = data.hc[0][1].Cf;
      document.getElementById("textLast").innerHTML = "/" + (+data.hc[0][1].Cf + (+data.hc[1][1].Cf)) + "<br />&nbsp;&nbsp;Points";
    }
  }
    
}