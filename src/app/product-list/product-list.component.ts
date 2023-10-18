import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { products } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Iproducts[] = products;

  constructor() {}

  ngOnInit(): void {
    
  }
}
