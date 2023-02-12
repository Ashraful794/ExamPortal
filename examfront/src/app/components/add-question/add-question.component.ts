import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from 'src/app/model/questions';
import { Quiz } from 'src/app/model/quiz';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor=ClassicEditor

  constructor(private router:ActivatedRoute,private quizservice:QuizService,private questionservice:QuestionsService,private route:Router) { }

  question:Questions=new Questions();
  id:any;
  title:any;

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id');
    this.title=this.router.snapshot.paramMap.get('title');
    this.quizservice.getSinglequiz(this.id).subscribe(
      (data:any)=>{
        this.question.quiz=data;
      }
    )

  }

  onSubmit()
  {
    this.questionservice.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('Successfully addeed question','Success','success');
        this.route.navigateByUrl(`admin-dashboard/view-questions/${this.id}/${this.title}`)
        // this.route.navigateByUrl("admin-dashboard/view-questions/{{id}}/{{title}}",{state:{id:this.id,title:this.title}})
      },
      (error)=>{
        Swal.fire('Error !!','Server Error ', "error")
      }
    )
   console.log(this.question)
  }

}
