import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""

  constructor(private api:ApiService,private route:Router){}

  // constructor(private route:Router){}

  // private route:Router

  searchData:any=[]
  searchUserDetails=()=>
  {
      let data:any={"email":this.email,"password":this.password}

      console.log(data)

      this.api.searchUsers(data).subscribe(

        (response:any)=>
        {
          console.log(response)

          if (response.length==0) {

            alert("Invalid User Credentials")
            
          } else 
          {
            alert("Valid User credentials")
            // this.searchData=response

            this.route.navigate(["/userNavbar"])

          }
        }
      )
  }

}
