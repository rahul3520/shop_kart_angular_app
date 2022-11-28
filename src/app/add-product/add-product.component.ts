import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  id=""
  title=""
  price=""
  description=""
  category=""
  image=""
  rating=""
  sellarName=""
  quantity=""

  readValues=()=>
  {
    let data:any=
    {
      "image":this.image,
      "title":this.title,
      "description":this.description,
      "rating":this.rating,
      "sellarName":this.sellarName,
      "quantity":this.quantity
    }

    console.log(data)
  }

}
