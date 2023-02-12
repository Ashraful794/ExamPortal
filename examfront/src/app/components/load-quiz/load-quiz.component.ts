import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  quiz:Quiz[]
  cid:any
  questions:any
  constructor(private activaterouter:ActivatedRoute,private quizservice:QuizService,private questionservice:QuestionsService) { }

  ngOnInit(): void {

    this.activaterouter.params.subscribe(
      (params)=>{
        this.cid=params['id'];
        if(this.cid == 0)
        {
          this.quizservice.getActiveQuiz().subscribe(
            (data:any)=>{
              this.quiz=data

              console.log(data)
            }
          )
        }
        else
        {

          this.quizservice.getQuizByCategoryAndActive(this.cid).subscribe(
            (data:any)=>{
              this.quiz=data
            }
          )
        }

      }
    )
  }


}
