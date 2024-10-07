// import {
//   AfterViewInit,
//   ChangeDetectionStrategy,
//   Component,
//   Input,
//   OnInit,
// } from "@angular/core";
// import * as Chartist from "chartist";

// export interface LegendItem {
//   title: string;
//   imageClass: string;
// }

// export enum ChartType {
//   Pie,
//   Line,
//   Bar,
// }

// @Component({
//   selector: "lbd-chart",
//   templateUrl: "./lbd-chart.component.html",
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class LbdChartComponent implements OnInit, AfterViewInit {
//   static currentId = 1;

//   @Input()
//   public title: string;

//   @Input()
//   public subtitle: string;

//   @Input()
//   public chartClass: string;

//   @Input()
//   public chartType: ChartType;

//   @Input()
//   public chartData: any;

//   @Input()
//   public chartOptions: any;

//   @Input()
//   public chartResponsive: any[];

//   @Input()
//   public footerIconClass: string;

//   @Input()
//   public footerText: string;

//   @Input()
//   public legendItems: LegendItem[];

//   @Input()
//   public withHr: boolean;

//   public chartId: string;

//   constructor() {}

//   public ngOnInit(): void {
//     this.chartId = `lbd-chart-${LbdChartComponent.currentId++}`;
//   }

//   public ngAfterViewInit(): void {
//     switch (this.chartType) {
//       case ChartType.Pie:
//         new Chartist.Pie(
//           `#${this.chartId}`,
//           this.chartData,
//           this.chartOptions,
//           this.chartResponsive
//         );
//         break;
//       case ChartType.Line:
//         new Chartist.Line(
//           `#${this.chartId}`,
//           this.chartData,
//           this.chartOptions,
//           this.chartResponsive
//         );
//         break;
//       case ChartType.Bar:
//         new Chartist.Bar(
//           `#${this.chartId}`,
//           this.chartData,
//           this.chartOptions,
//           this.chartResponsive
//         );
//         break;
//     }
//   }
//   public updateChart(): void {
//     if (this.chartType === ChartType.Pie) {
//       new Chartist.Pie(
//         `#${this.chartId}`,
//         this.chartData,
//         this.chartOptions,
//         this.chartResponsive
//       );
//     } else if (this.chartType === ChartType.Line) {
//       new Chartist.Line(
//         `#${this.chartId}`,
//         this.chartData,
//         this.chartOptions,
//         this.chartResponsive
//       );
//     } else if (this.chartType === ChartType.Bar) {
//       new Chartist.Bar(
//         `#${this.chartId}`,
//         this.chartData,
//         this.chartOptions,
//         this.chartResponsive
//       );
//     }
//   }
// }
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import * as Chartist from "chartist";

export interface LegendItem {
  title: string;
  imageClass: string;
}

export enum ChartType {
  Pie,
  Line,
  Bar,
}

@Component({
  selector: "lbd-chart",
  templateUrl: "./lbd-chart.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LbdChartComponent implements OnInit, AfterViewInit, OnChanges {
  static currentId = 1;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() chartClass: string;
  @Input() chartType: ChartType;
  @Input() chartData: any;
  @Input() chartOptions: any = {};
  @Input() chartResponsive: any[] = [];
  @Input() footerIconClass: string;
  @Input() footerText: string;
  @Input() legendItems: LegendItem[] = [];
  @Input() withHr: boolean;

  public chartId: string;

  constructor() {}

  ngOnInit(): void {
    this.chartId = `lbd-chart-${LbdChartComponent.currentId++}`;
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.chartData && !changes.chartData.firstChange) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    const chartData = this.chartData;

    if (chartData) {
      switch (this.chartType) {
        case ChartType.Pie:
          new Chartist.Pie(
            `#${this.chartId}`,
            chartData,
            this.chartOptions,
            this.chartResponsive
          );
          break;
        case ChartType.Line:
          new Chartist.Line(
            `#${this.chartId}`,
            chartData,
            this.chartOptions,
            this.chartResponsive
          );
          break;
        case ChartType.Bar:
          new Chartist.Bar(
            `#${this.chartId}`,
            chartData,
            this.chartOptions,
            this.chartResponsive
          );
          break;
      }
    }
  }
}
