import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items = this.cartService.getItems()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })
  
  constructor(
    // injecting cartService obj so the CartComponent can use it
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('You order has been submited!', this.checkoutForm.value);
    this.checkoutForm.reset()
  }

  ngOnInit(): void {
  }
}
