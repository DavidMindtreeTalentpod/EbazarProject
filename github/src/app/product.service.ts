import { Injectable } from '@angular/core';
import { Product } from 'src/model/Product';
import { Products } from './product-module/Product_details';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  constructor() { }


  getProducts(): Observable<Product[]> {        //we created one method  for  Array Product  return all to 
   
   
    return of(Products);
  }


}
