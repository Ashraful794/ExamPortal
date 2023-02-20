import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginData } from 'src/app/model/login-data';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Console } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:LoginData=new LoginData();

  constructor(private snack:MatSnackBar,private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
      if(this.loginData.username.trim()=='' || this.loginData.username==null)
      {
        this.snack.open('Username is required !!', '',{
          duration:3000,
        });
        return
      }

      if(this.loginData.password.trim()=='' || this.loginData.password==null)
      {
        this.snack.open('Password is required !!', '',{
          duration:3000,
        });
        return
      }

      this.loginService.login(this.loginData).subscribe(
        (data:any)=>{
          this.loginService.loginUser(data.token);

          this.loginService.isLoggedIn()

          this.loginService.getCurrentUser().subscribe(
            (user:any)=>{
              this.loginService.setUser(user)

              const userROle=this.loginService.getUserRole()

              console.log(userROle);

              if(userROle == 'ROLE_ADMIN')
              {
                this.router.navigateByUrl('/admin-dashboard');
                this.loginService.loginstatusSubjext.next(true);

              }
              else if(userROle == 'ROLE_USER')
              {
                this.router.navigateByUrl('/user-dashboard/0');
                this.loginService.loginstatusSubjext.next(true);
              }
              else
              {
                this.loginService.logout();
              }


            }
          )



        },
        error=>
        {
          alert('Someething Worng');
          this.snack.open('Something went wrong !!','',{
            duration:3000,
          });
          return
        }
      );
  }

}
