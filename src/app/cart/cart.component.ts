import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { LoginComponent } from '../login/login.component';

let items = new Map();
let count = 0;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private login:LoginComponent) { }
  availableItems = items;
  directLink="";

  ngOnInit(): void {
  }

  totalItems() {
    return count;
  }

  isLog(){
    this.login.isLogged();
    if(!this.login.isLoggedin)
    {
      this.directLink='../login';
    }
    else
    {
      this.directLink='../payment';
    }
  }

  addItem(item){
    this.addToCart(item);
  }

  removeItem(item){
    this.clearProductFromCart(item);
  }

  addToCart(item) {
    count++;
    this.updateCounts(item);
  }

  clearProductFromCart(item) {
    var temp = items.get(item.description);
    if (temp.quantity > 0) {
      if (count > 0)
        count--;
      temp.quantity = temp.quantity - 1;
      temp.availableQuantity = temp.availableQuantity + 1;
      items.set(item.description, temp);
    }
    if (items.get(item.description).quantity == 0) {
      if (count > 0)
        count--;
      items.delete(item.description);
    }
  }

  totalPrice() {
    var total = 0;
    items.forEach((value: Item, key: string) => {
      total += value.quantity * value.price;
    });
    return total;
  }

  getValues(map) {
    return Array.from(map.values());
  }

  updateCounts(item) {
    if (items.has(item.description)) {
      var temp = items.get(item.description);
      temp.quantity = temp.quantity + 1;
      temp.availableQuantity = temp.availableQuantity - 1;
      items.set(item.description, temp);
    }
    else {
      item.quantity++;
      item.availableQuantity--;
      items.set(item.description, item);
    }
  }


}