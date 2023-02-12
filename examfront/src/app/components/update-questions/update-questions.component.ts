import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from 'src/app/model/questions';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit {

  constructor(private questionService:QuestionsService,private activatedrouter:ActivatedRoute,private router:Router) { }

  question:Questions=new Questions()
  id:any;
  i=2;


  ngOnInit(): void {
    this.id=this.activatedrouter.snapshot.paramMap.get('id');

    this.questionService.getQuestion(this.id).subscribe(
      (data:any)=>{
        this.question=data;
      }
    )

  }

  onSubmit()
  {
    this.questionService.update(this.question).subscribe(
      (data:any)=>{
         Swal.fire('Update Questions','Update','success')
         this.router.navigateByUrl(`/admin-dashboard/view-questions/${data.quiz.id}/${data.quiz.title}`)
      },
      (error)=>{}
    )
  }

}
