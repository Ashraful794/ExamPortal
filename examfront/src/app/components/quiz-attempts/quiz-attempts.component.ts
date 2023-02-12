import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { QuizAttemptsService } from 'src/app/services/quiz-attempts.service';

@Component({
  selector: 'app-quiz-attempts',
  templateUrl: './quiz-attempts.component.html',
  styleUrls: ['./quiz-attempts.component.css']
})
export class QuizAttemptsComponent implements OnInit {

  quizAttempts:any
  id:any
  constructor(private quizattemptservice:QuizAttemptsService,private loginservice:LoginService) { }


  ngOnInit(): void {
    this.id=this.loginservice.getUser().id;

    this.quizattemptservice.getQuizAttempts(this.id).subscribe(
      (data:any)=>{
        this.quizAttempts=data
        console.log(data)
      }
    )

  }

}
