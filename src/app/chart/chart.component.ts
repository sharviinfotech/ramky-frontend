import { Component, OnInit } from "@angular/core";
import { ChartType } from "app/lbd/lbd-chart/lbd-chart.component";
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  
  public pieChartData: any;
  public pieChartOptions: any;
  public pieLegendItems: any[];
  pieChartType = ChartType.Pie;
  constructor() {
    this.pieChartData = {
      labels: ["Test A", "Test B"],
      datasets: [
        {
          data: [10, 20],
          backgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };
    this.pieChartOptions = {
      responsive: true,
    };
    this.pieLegendItems = [
      { title: "Test A", imageClass: "fa fa-circle text-info" },
      { title: "Test B", imageClass: "fa fa-circle text-danger" },
    ];
  }

  ngOnInit(): void {}
}
