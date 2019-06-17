import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list-display',
  templateUrl: './product-list-display.component.html',
  styleUrls: ['./product-list-display.component.css']
})
export class ProductListDisplayComponent implements OnInit 
{


  products:Product[];



  constructor( private productService:ProductService

  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProducts()
        .subscribe(p => this.products = p);
}
}

