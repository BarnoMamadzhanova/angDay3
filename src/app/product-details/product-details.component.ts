import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Iproducts } from '../iproducts';
import { products } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product : Iproducts = {} as Iproducts;
  id : number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  addToCart() {
    alert("Item has been added to the cart!")
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.product = products[this.id]
    })
  }

}
