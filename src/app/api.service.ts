import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProducts=() =>
  {
    return this.http.get("http://localhost:8080/viewproduct")
  }

  userRegn=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }

  addProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addproduct",dataToSend)
  }

  searchProducts=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchproduct",dataToSend)
  }

  searchUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchuser",dataToSend)
  }
}
