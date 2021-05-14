import { Component, Input, OnInit } from '@angular/core';
import { AvailableItemsComponent } from '../available-items/available-items.component';
import { CartComponent } from '../cart/cart.component';
import { Item } from '../item';

let eachItemCount = new Map();

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  mItems = [];
  msg = "";
  isMsg = false;
  itemName;

  constructor(private avail: AvailableItemsComponent,private cart:CartComponent) { }

  @Input() item: Item;

  ngOnInit(): void {
    // this.mItems=this.VEGETABLES;
    // if(menuItems!=undefined)
    // this.mItems.push(menuItems[0]);
    // console.log("mItems->",this.mItems);
    this.dispItems();
  }

  itemCount = eachItemCount;


  totalQuantity() {
    return this.cart.totalItems();
  }

  dispItems() {
    this.mItems = this.avail.availableMenuItems;
  }

  addItem(m) {
    this.isMsg=false;
    var index = this.avail.availableMenuItems.findIndex(x => x.description == m.description);
    if (this.avail.availableMenuItems[index].availableQuantity > 0) {
      if (eachItemCount.has(m.description) && eachItemCount[m.description] < this.avail.availableMenuItems[index]) {
        eachItemCount.set(m.description, eachItemCount.get(m.description) + 1);
        this.cart.addToCart(m);
      }
      else {
        eachItemCount.set(m.description, m.quantity + 1);
        this.cart.addToCart(m);
      }
      this.isMsg=false;
    }
    else
    {
      this.itemName=m.description;
      this.isMsg=true;
      this.msg="Available quantity reached!";
    }
  }

  removeItem(m) {
    if (m.quantity > 0) {
      if (eachItemCount.has(m.description))
        eachItemCount.set(m.description, eachItemCount.get(m.description) - 1);
      else
        eachItemCount.set(m.description, m.quantity - 1);
      this.cart.clearProductFromCart(m);
      this.isMsg=false;
    }
  }

}