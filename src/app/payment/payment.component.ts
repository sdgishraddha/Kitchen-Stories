import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cart:CartComponent,private fb:FormBuilder) { }

  availableItems=this.cart.availableItems; 
  totalPrice=this.cart.totalPrice();

  getValues(item)
  {
    return this.cart.getValues(item);
  }

  userPayment = this.fb.group({
    cardNumber: ['', Validators.required],
    expiryDate: ['', Validators.required],
    cvv: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  get cardNumber(): any {
    return this.userPayment.get('cardNumber');
  }
  get expiryDate(): any {
    return this.userPayment.get('expiryDate');
  }
  get cvv(): any {
    return this.userPayment.get('cvv');
  }

}
