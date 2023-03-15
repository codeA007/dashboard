import { Component ,ViewChild,OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  constructor(){
  }
  chart:any = null;
 ngOnInit() {
  const data = {
    lables:['one'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ['10','22'],
        borderColor: 'red',
        backgroundColor:'blue',
      },]}
 this.chart = new Chart("myChart", {
  type: 'bar',
  data:{
    labels: ['blue', 'Red', 'Orange', 'Yellow', 'LightBlue', 'Purple'],
    datasets: [{
      label: '# of Votes',
      data: [70, 20, 80, 40, 50, 10],
      borderWidth: 1,
      // backgroundColor: ['#9BD0F5','blue']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
});
 }
}
