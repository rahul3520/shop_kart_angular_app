import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  name=""

  constructor(private api:ApiService){}

  searchData:any=[]

  searchProductDetails=()=>
  {
    let data:any={"name":this.name}

    console.log(data)

    this.api.searchProducts(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.length==0)
        {
          alert("Invalid product name")
          
        }
        else
        {
          this.searchData=response
        }
      }

    )
  }

}
