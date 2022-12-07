import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  address=""
  phoneNo=""
  email=""
  password=""
  confirmPassword=""

  constructor(private api:ApiService){}

  UserRegistration=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phoneNo":this.phoneNo,"email":this.email,"password":this.password,"confirmPassword":this.confirmPassword}

    console.log(data)

    this.api.userRegn(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if (response.status=="success") 
        {
          alert("User Registered Successfully!") 
        } 
        else 
        {
          alert("Something went wrong. Try again.")
          this.name=""
          this.address=""
          this.phoneNo=""
          this.email=""
          this.password=""
          this.confirmPassword=""
        }
      }
    )
  }

}
