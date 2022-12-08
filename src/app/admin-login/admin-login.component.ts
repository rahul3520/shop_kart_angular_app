import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  Username=""
  Password=""

  public constructor(private route:Router){}

  checkAdmin=()=>
  {
    if (this.Username=="admin" && this.Password=="12345") {

      this.route.navigate(["/add"])
      
    } else 
    {
      alert("Invalid credentials")  
      this.Username=""
      this.Password=""
    }
  }

}
