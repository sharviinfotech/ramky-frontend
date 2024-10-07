import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SalesService {
  constructor() {}
  getSalesData(fromDate: string, toDate: string): Observable<any> {
    // Generate dummy sales data
    const salesData = this.generateDummySalesData(fromDate, toDate);
    const customers = this.getTopCustomers(salesData);
    const materialGroups = this.getMaterialGroups(salesData);

    return of({ sales: salesData, customers, materialGroups });
  }

  private generateDummySalesData(fromDate: string, toDate: string) {
    // Sample data generation logic
    const sales = [];
    for (let i = 0; i < 100; i++) {
      sales.push({
        salesOrder: `SO${i + 1}`,
        salesOffice: Math.floor(Math.random() * 1000),
        documentDate: this.getRandomDate(fromDate, toDate),
        customerName: `Customer ${Math.floor(Math.random() * 20) + 1}`,
        materialGroup: `Material Group ${Math.floor(Math.random() * 5) + 1}`,
        amountInvoiced: Math.floor(Math.random() * 10000) + 5000,
      });
    }
    return sales;
  }

  private getTopCustomers(salesData: any[]) {
    const customerTotals = salesData.reduce((acc, sale) => {
      acc[sale.customerName] =
        (acc[sale.customerName] || 0) + sale.amountInvoiced;
      return acc;
    }, {});

    return Object.keys(customerTotals)
      .map((customer) => ({
        name: customer,
        totalSales: customerTotals[customer],
      }))
      .sort((a, b) => b.totalSales - a.totalSales)
      .slice(0, 5); // Top 5 customers
  }

  private getMaterialGroups(salesData: any[]) {
    const groupTotals = salesData.reduce((acc, sale) => {
      acc[sale.materialGroup] =
        (acc[sale.materialGroup] || 0) + sale.amountInvoiced;
      return acc;
    }, {});

    return Object.keys(groupTotals).map((group) => ({
      name: group,
      totalSales: groupTotals[group],
    }));
  }

  private getRandomDate(fromDate: string, toDate: string): string {
    const start = new Date(fromDate).getTime();
    const end = new Date(toDate).getTime();
    const randomTime = Math.random() * (end - start) + start;
    return new Date(randomTime).toLocaleDateString("en-CA"); // Format YYYY-MM-DD
  }
}
