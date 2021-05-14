import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  msg="";
  isEnable=false;
  isError=false;
  constructor(private fb: FormBuilder,private loginId:LoginComponent) {

   }

  changePassword=this.fb.group({
    email: "admin@kitchenStory.com",
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit(data){
    if(data.password!=data.confirmPassword)
    {
       this.isError=true;
       this.isEnable=false;
       this.msg="Passwords doesn't match!";
    } 
    else 
    {
       this.loginId.ids[0].password=data.password;
       this.isError=false;
       this.isEnable=true;
       this.msg="Password changed successfully!";
       this.loginId.changePassword();
    }
  }

  get password():any{
    return this.changePassword.get('password');
  }
  get confirmPassword():any{
    return this.changePassword.get('confirmPassword');
  }

}
