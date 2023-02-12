import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Quiz } from 'src/app/model/quiz';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute,private quizService:QuizService,private categoryService:CategoryService) { }

  id:any;
  category:Category[]

  quiz:Quiz=new Quiz()

  ngOnInit(): void {
    this.id= this.activatedroute.snapshot.paramMap.get('id');

    this.quizService.getSinglequiz(this.id).subscribe(
      (data:any)=>{
        this.quiz=data;
      }
    )
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.category=data
      }
    )
  }
  onSubmit()
  {
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        this.quiz=data;
        Swal.fire('Update Quiz','Update','success'),
        this.router.navigateByUrl("/admin-dashboard/view-quizes")
      },
      (error)=>{
        Swal.fire('Error','Error','error')
      }
    )
  }

}
