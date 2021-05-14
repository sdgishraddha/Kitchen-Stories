import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedin;
username;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  user(form,isLoggedin){
    console.log(form);
    //console.log(isLoggedin);
    this.username=form.email.substr(0,form.email.search("@"));
    //console.log(this.username);
    this.isLoggedin=isLoggedin;
    this.router.navigateByUrl('home');
  }

  logout(){
    this.isLoggedin=false;
    this.router.navigateByUrl('/home');
  }

  isAdmin()
  {
    return this.username=="admin";
  }
}
