import { Component, OnInit, VERSION } from '@angular/core';

let finalAvailItems = [
  {
    description: 'Tomato',
    img: '../../assets/img/tomato.jpg',
    price: 40,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Potato',
    img: '../../assets/img/potato.jpg',
    price: 50,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Onion',
    img: '../../assets/img/onion.jpg',
    price: 60,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Cabbage',
    img: '../../assets/img/cabbage.jpg',
    price: 30,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Capsicum',
    img: '../../assets/img/capsicum.jpg',
    price: 30,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Cauliflower',
    img: '../../assets/img/cauliflower.jpg',
    price: 40,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  },
  {
    description: 'Apple',
    img: '../../assets/img/apple.jpg',
    price: 30,
    quantity: 0,
    typeOfQuantity: 'piece',
    availableQuantity: 25
  },
  {
    description: 'Banana',
    img: '../../assets/img/banana.jpg',
    price: 30,
    quantity: 0,
    typeOfQuantity: 'dozen',
    availableQuantity: 15
  },
  {
    description: 'Strawberries',
    img: '../../assets/img/strawberry.jpg',
    price: 40,
    quantity: 0,
    typeOfQuantity: '30 grams',
    availableQuantity: 25
  },
  {
    description: 'Orange',
    img: '../../assets/img/orange.jpg',
    price: 50,
    quantity: 0,
    typeOfQuantity: 'kg',
    availableQuantity: 15
  }
];

@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.css']
})
export class AvailableItemsComponent implements OnInit {
  availableMenuItems;
  constructor() {
    this.availableMenuItems = finalAvailItems;
  }

  ngOnInit(): void {
    this.displayItems();
  }

  displayItems() {
    this.availableMenuItems = finalAvailItems;
  }

  onAdd(item) {
    var index = this.availableMenuItems.findIndex(x => x.description == item.description);
    this.availableMenuItems[index].availableQuantity += 1;
  }

  onSub(item) {
    var index = this.availableMenuItems.findIndex(x => x.description == item.description);
    if(this.availableMenuItems[index].availableQuantity>0)
    this.availableMenuItems[index].availableQuantity -= 1;
    else if(this.availableMenuItems[index].availableQuantity==0)
    this.removeItem(item);
  }

  removeItem(item) {
    var index = this.availableMenuItems.findIndex(x => x.description == item.description);
    this.availableMenuItems.splice(index, 1);
    finalAvailItems = this.availableMenuItems;
  }

}
