import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  category:Category=new Category();

  constructor(private categoryService:CategoryService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.category.title==null || this.category.title.trim()== '')
    {
      this.snack.open('Title is Required !!','',{
        duration:3000
      });
      return;
    }

   this.categoryService.addCategory(this.category).subscribe(
    (data:any)=>{
      Swal.fire('Success !!','Category is added successfully ','success')
      this.router.navigateByUrl("/admin-dashboard/view-categories")
    },
    (error)=>{
      Swal.fire('Error !!','Server Error ', "error")

    }
   )
  }

}
