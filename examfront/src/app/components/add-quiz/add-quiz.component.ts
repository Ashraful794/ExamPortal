import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Quiz } from 'src/app/model/quiz';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  constructor(private categoryService:CategoryService,private quizService:QuizService,private snack:MatSnackBar,private router:Router) { }

  quiz=new Quiz();

  category=[]

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        console.log(data)
        this.category=data
      }
    )
  }


  onSubmit()
  {
    console.log(this.quiz);
    this.quizService.addquiz(this.quiz).subscribe(
      (data:any)=>{
        this.router.navigateByUrl("/admin-dashboard/view-quizes")
      },
      (error)=>
      {
        console.log(error)
        Swal.fire("error",'Error','error')
      }
    )
  }

}
