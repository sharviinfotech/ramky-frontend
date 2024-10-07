import { DatePipe } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { format } from "date-fns/esm";
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "pe-7s-graph", class: "" },
  { path: "/user", title: "User Profile", icon: "pe-7s-user", class: "" },
  { path: "/table", title: "Data ", icon: "pe-7s-note2", class: "" },
  // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { path: "/icons", title: "Icons", icon: "pe-7s-science", class: "" },
  //{ path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "pe-7s-bell",
    class: "",
  },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  providers: [DatePipe],
})
export class SidebarComponent implements OnInit {
  fromDate: string;
  toDate: string;
  displayFromDate: string = "";
  displayToDate: string = "";
  @Output() dateRangeChange: EventEmitter<{
    from: string;
    to: string;
  }> = new EventEmitter();
 

  onFromDateChange(date: string) {
    this.fromDate = date;
    this.displayFromDate = this.formatDateForDisplay(new Date(date));
    this.emitDateRange();
  }
  onToDateChange(date: string) {
    this.toDate = date;
    this.displayToDate = this.formatDateForDisplay(new Date(date));
    this.emitDateRange();
  }

  private emitDateRange() {
    if (this.fromDate && this.toDate) {
      console.log("Emitting Date Range:", this.fromDate, this.toDate);
      this.dateRangeChange.emit({
        from: this.formatDate(new Date(this.fromDate)),
        to: this.formatDate(new Date(this.toDate)),
      });
      console.log(
        "Date Range Changed:",
        this.displayFromDate,
        this.displayToDate
      );
    }
  }
  private formatDate(date: Date): string {
    // Format the JavaScript Date object directly to "dd-MM-yyyy"
    return format(date, "dd-MM-yyyy");
  }

  private formatDateForDisplay(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  menuItems = [
    {
      path: "/dashboard",
      icon: "fa fa-dashboard",
      title: "Dashboard",
      class: "",
    },
    { path: "/reports", icon: "fa fa-bar-chart", title: "Reports", class: "" },
    // Add other menu items here
  ];

  constructor() {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  isMobileMenu() {
    return window.innerWidth <= 991;
  }
}
