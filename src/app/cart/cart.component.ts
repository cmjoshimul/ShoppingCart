import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartServive:CartService,
              private formBuilder:FormBuilder,
    ) { }
  items = this.cartServive.getItems();
  checkOutForm=this.formBuilder.group( {
    name:'',
    address:''
  });
  onSubmit (): void {
    this.items = this.cartServive.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
  ngOnInit(): void {
  }

}
