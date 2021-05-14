import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AvailableItemsComponent } from '../available-items/available-items.component';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
newItem;
msg="";
isMsg=false;

  constructor(private fb:FormBuilder,private available:AvailableItemsComponent) { }

  ngOnInit(): void {
  }

  newUser=this.fb.group({
    proName: ['', Validators.required],
    itemPrice: ['',Validators.required],
    avail: ['',Validators.required],
    itemUrl: ['',Validators.required],
    quantityType: ['',Validators.required]
  });

  addItem(editForm){
    this.msg="Item added successfully!";
    this.isMsg=true;
    var data={description:editForm.proName,img:editForm.itemUrl,price:editForm.itemPrice,quantity:0,typeOfQuantity:editForm.quantityType,availableQuantity:editForm.avail};
    this.newItem=data;
    this.available.availableMenuItems.push(this.newItem);
  }

  get proName(): any{
    return this.newUser.get('proName').toString();
  }
  get itemPrice(): any{
    return Number(this.newUser.get('itemPrice'));
  }
  get avail(): any{
    return Number(this.newUser.get('avail'));
  }
  get itemUrl(): any{
    return this.newUser.get('itemUrl').toString();
  }
  get quantityType(): any{
    return Number(this.newUser.get('quantityType'));
  }
}
