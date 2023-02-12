import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user=undefined;

  authority=null

  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {

    this.isLoggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();

    this.authority=this.user.authorities[0].authority

    this.loginService.loginstatusSubjext.asObservable().subscribe((data)=>{

      this.isLoggedIn=this.loginService.isLoggedIn();
      this.user=this.loginService.getUser();

    })

  }
  logout()
  {
    this.loginService.logout();
    this.isLoggedIn=false;
    this.user=null;
    this.router.navigateByUrl("/login")
  }

}
