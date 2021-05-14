import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';

let userIDs=[
  {
    fullName:"Admin",
    email: "admin@kitchenStory.com",
    phoneNumber:9523957350,
    password: "admin123"
  },
  {
    fullName:"User1",
    email: "user1@gmail.com",
    phoneNumber:9523934350,
    password: "user123"
  }
];

let isLog;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url = "";
  msg = "";
  isLoggedin = false;
  isError = false;
  ids=userIDs;

  user = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router,private nav:NavbarComponent) {
    this.url = "http://localhost:3000/";
  }

  ngOnInit(): void {
    this.ids=userIDs;
  }

  get email(): any {
    return this.user.get('email');
  }
  get password(): any {
    return this.user.get('password');
  }

  changePassword(){
    userIDs=this.ids;
  }

  onSubmit(form) {
    for (var i = 0; i < userIDs.length; i++) {
      if (userIDs[i].email == form.email) {
        if (userIDs[i].password == form.password) {
          this.isLoggedin=true;
          isLog=true;
          this.nav.user(form,this.isLoggedin);
        }
        else {
          isLog=false;
          this.msg = "Invalid username or password!";
          this.isError = !this.isError;
        }
      }
    }
  }

  isLogged(){
    this.isLoggedin=isLog;
  }
}
