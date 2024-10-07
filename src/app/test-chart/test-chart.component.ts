import { Component, OnInit } from "@angular/core";
import { ChartType } from "app/lbd/lbd-chart/lbd-chart.component";
// Define the interface for chart data
interface PieChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}
@Component({
  selector: "app-test-chart",
  templateUrl: "./test-chart.component.html",
  styleUrls: ["./test-chart.component.scss"],
})
export class TestChartComponent implements OnInit {
  public barChartData: any[] = []; // Data for the bar chart

  public lineChartData = {}; // Data for the line chart
  public barChartOptions = { seriesBarDistance: 10 }; // Options for the bar chart
  public lineChartOptions = {}; // Options for the line chart
  public legendItems: string[] = []; // Legend items for the chart
  barLegendItems: any[] = [];
  lineLegendItems: any[] = [];
  customerChartType = ChartType.Bar;
  pieChartType = ChartType.Pie;
  lineChartType = ChartType.Line;
  public barChartLabels: string[] = [];

  public pieChartData: PieChartData = {
    labels: ["Customer A", "Customer B", "Customer C", "Customer D"],
    datasets: [
      {
        data: [300, 500, 100, 200], // Dummy data for the demo
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  public pieChartOptions = {
    labelInterpolationFnc: (value) => value,
  };

  public pieLegendItems = [
    { title: "Customer A", imageClass: "fa fa-circle text-info" },
    { title: "Customer B", imageClass: "fa fa-circle text-danger" },
    { title: "Customer C", imageClass: "fa fa-circle text-warning" },
    { title: "Customer D", imageClass: "fa fa-circle text-primary" },
  ];
  // Pie chart variables
  public pieChartLabels: string[] = [];

  // Dummy sales data to simulate API response
  salesData: any[] = [
    {
      Sales_Document_Number: "10001",
      Net_Value_Document_Currency: 1200,
      Customer_Name: "Customer A",
    },
    {
      Sales_Document_Number: "10002",
      Net_Value_Document_Currency: 950,
      Customer_Name: "Customer B",
    },
    {
      Sales_Document_Number: "10003",
      Net_Value_Document_Currency: 800,
      Customer_Name: "Customer A",
    },
    {
      Sales_Document_Number: "10004",
      Net_Value_Document_Currency: 450,
      Customer_Name: "Customer C",
    },
    {
      Sales_Document_Number: "10005",
      Net_Value_Document_Currency: 2000,
      Customer_Name: "Customer B",
    },
  ];

  constructor() {}

  ngOnInit() {
    // Using the dummy data to prepare the chart
    this.pieChartData = {
      labels: ["Test A", "Test B"],
      datasets: [
        {
          data: [10, 20],
          backgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };

    this.barChartData = [{ data: [100, 200, 300], label: "Test Data" }];

    console.log("Pie Chart Data:", this.pieChartData);
    console.log("Bar Chart Data:", this.barChartData);
  }
  // Prepare bar chart data (Net Value per Sales Document)
  prepareBarChartData() {
    const salesDocumentNumbers = this.salesData.map(
      (item) => item.Sales_Document_Number
    );
    const netValues = this.salesData.map(
      (item) => item.Net_Value_Document_Currency
    );

    this.barChartLabels = salesDocumentNumbers;
    this.barChartData = [{ data: netValues, label: "Net Value" }];
  }
  // Prepare pie chart data (Customer Distribution)
  preparePieChartData() {
    const customerNames = this.salesData.map((item) => item.Customer_Name);
    const customerCount = {};

    customerNames.forEach((name) => {
      customerCount[name] = (customerCount[name] || 0) + 1;
    });

    // Prepare the pieChartData structure
    this.pieChartData = {
      labels: Object.keys(customerCount),
      datasets: [
        {
          data: Object.values(customerCount), // This gives you the count for each customer
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        },
      ],
    };
  }
}
