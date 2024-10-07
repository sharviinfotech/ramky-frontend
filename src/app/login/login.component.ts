import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  email: string = "";
  password: string = "";

  constructor(private router: Router) {}

  // Method triggered on form submission
  onLogin() {
    // You can set any condition to validate the input
    if (this.email && this.password) {
      // Navigate to the desired page after successful login
      this.router.navigate(["/dashboard"]); // '/dashboard' is the route you want to navigate to
    } else {
      // Handle error if input is empty or invalid (optional)
      alert("Please enter a valid email and password");
    }
  }
}
