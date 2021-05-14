import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { AvailableItemsComponent } from './available-items/available-items.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    CartComponent,
    SearchComponent,
    SignupComponent,
    EditItemsComponent,
    AvailableItemsComponent,
    EditPasswordComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MenuComponent,
    AvailableItemsComponent,
    EditItemsComponent,
    LoginComponent,
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
