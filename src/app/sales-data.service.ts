// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable({
//   providedIn: "root",
// })
// export class SalesDataService {
//   private apiUrl = "http://localhost:3000/api/sales-data"; // Your Node.js API URL

//   constructor(private http: HttpClient) {}

//   // Method to fetch sales data
//   getSalesData(): Observable<any[]> {
//     const headers = new HttpHeaders().set("Content-Type", "application/json");
//     return this.http.get<any[]>(this.apiUrl, { headers });
//   }
// }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SalesDataService {
  private apiUrl = "http://localhost:3000/api/sales-report";

  constructor(private http: HttpClient) {}

  getSalesReport(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
