import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserService, private snack:MatSnackBar) { }

  user:User=new User();

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.user.username== '' || this.user.username== null)
    {
      this.snack.open('Username is required !!', '',{
        duration:3000,
      });
      return
    }



    this.userservice.addUser(this.user).subscribe(
      data=>{
        console.warn(data);
        Swal.fire('Success','User is Registerd','success');
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
    console.warn(this.user);
  }

}
