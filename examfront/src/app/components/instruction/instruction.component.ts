import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  id:any
  quiz:any

  constructor(private activaterouter:ActivatedRoute,private quizservice:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.paramMap.get('id');

    this.quizservice.getSinglequiz(this.id).subscribe(
      (data:any)=>{
        this.quiz=data
      }
    )

  }
  startquiz()
  {
    Swal.fire({
      title:'Do you want to start the quiz?',
      showCancelButton:true,
      confirmButtonText:'Start',
      icon:'info',
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.router.navigateByUrl(`/start-quiz/${this.id}`);
      }
      else if(result.isDenied)
      {
        Swal.fire('Changed are not saved','','info')
      }
    })
  }

}
