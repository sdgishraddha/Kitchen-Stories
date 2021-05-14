import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url:any;
  msg="";
  isEnable=false;
  
    constructor(private fb:FormBuilder,private loginIDs:LoginComponent){
      
    }
  ngOnInit(): void {
   
  }
  
    newUser=this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  
    onSubmit(data){
      var x={fullName:data.fullName,email:data.email,phoneNumber:data.phoneNumber,password:data.password};
      this.loginIDs.ids.push(x);
      this.loginIDs.changePassword();
      this.isEnable=true;
      this.msg="Registered successfully!"
    }
  
    get fullName(): any{
      return this.newUser.get('fullName');
    }
    get email(): any{
      return this.newUser.get('email');
    }
    get phoneNumber(): any{
      return this.newUser.get('phoneNumber');
    }
    get password(): any{
      return this.newUser.get('password');
    }
    get confirmPassword(): any{
      return this.newUser.get('confirmPassword'); 
    }
  }
  
  