import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Iproducts[] = [];
  cartForm = this.fb.group({
    name: '', 
    address: '',
  })

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  clearCart() {
    alert('Your cart has been cleared');
    this.cart = this.cartService.clearCart();
    this.cartForm.reset();
  }

  onSubmit() {
    console.warn('Your order has been submitted',
    this.cartForm.value);
    this.cart = this.cartService.clearCart();
    this.cartForm.reset();
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

}
