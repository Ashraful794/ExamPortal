import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  id:any;
  title:any;

  constructor(private activerouter:ActivatedRoute,private questionsservice:QuestionsService) { }

  questions:any


  ngOnInit(): void {
    this.id=this.activerouter.snapshot.paramMap.get('id');
    this.title=this.activerouter.snapshot.paramMap.get('title');

    this.questionsservice.getQuestions(this.id).subscribe(
      (data:any)=>{
        this.questions=data
        console.log(this.questions);
      }
    )

  }

  deleteQuestion(id:any)
  {

    Swal.fire({
      icon:'info',
      title:"Are you Sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)
      {
        this.questionsservice.deleteQuestion(id).subscribe(
          (data:any)=>{
            this.questions=this.questions.filter((questions)=>questions.id!=id);
            Swal.fire('Success','Questions Deleted','success')
          },
          (error)=>{
            Swal.fire('Error','Error in Deleting question','error');
          }
        )
      }

    })

  }



}
