import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { CartComponent } from './cart/cart.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component:  MenuComponent},
  { path: 'cart', component: CartComponent},
  { path: 'signup',component: SignupComponent},
  { path: 'editItems',component:  EditItemsComponent},
  { path: 'availableItems',component: AvailableItemsComponent},
  { path: 'editPassword',component: EditPasswordComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
