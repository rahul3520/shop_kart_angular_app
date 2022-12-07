import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  name=""
  image=""
  category=""
  description=""
  price=""

  // rating=""
  // sellarName=""
  // quantity=""

  constructor(private api:ApiService){}

  readProductData=()=>
  {
    let data:any=
    {
      "name":this.name,
      "image":this.image,
      "category":this.category,
      "description":this.description,
      "price":this.price
    }

    console.log(data)

    this.api.addProducts(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("product added successfully!")
        }
        else
        {
          alert("Something went wrong. Try again")
          this.name=""
          this.image=""
          this.category=""
          this.description=""
          this.price=""
        }
      }
    )


  }

}
