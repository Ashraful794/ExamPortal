import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quiz=[]

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getquiz().subscribe(
      (data:any)=>{
        this.quiz=data
        console.log(data);
      }
    )
  }

  delete(id:number)
  {
    Swal.fire({
      icon:'info',
      title:"Are you Sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)
      {
        this.quizService.deletequiz(id).subscribe(
          (data:any)=>{
            this.quiz=this.quiz.filter((quiz)=>quiz.id!=id);
            Swal.fire('Success','Quiz Deleted','success')
          },
          (error)=>{
            Swal.fire('Error','Error in Deleting quiz','error');
          }
        )
      }

    })



    console.log(id);
  }

}
