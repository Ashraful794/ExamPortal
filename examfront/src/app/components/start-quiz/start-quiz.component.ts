import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAttempt } from 'src/app/model/quiz-attempt';
import { LoginService } from 'src/app/services/login.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizAttemptsService } from 'src/app/services/quiz-attempts.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  quizattempt:QuizAttempt=new QuizAttempt();
  id:any;
  question:any
  correctAnswer=0
  marksGot:any
  attempted=0
  isSubmit=false
  timer=0
  user:any
  quiz:any
  constructor(private quizservice:QuizService,private loginservice:LoginService ,private activaterouter:ActivatedRoute,private questionservice:QuestionsService,private locationSt:LocationStrategy,private router:Router,private quizAttemptsService:QuizAttemptsService) { }


  ngOnInit(): void {

    this.user=this.loginservice.getUser()


    this.id=this.activaterouter.snapshot.paramMap.get('id')

    this.quizservice.getSinglequiz(this.id).subscribe(
      (data:any)=>{
        this.quiz=data
        console.log(data)
      }
    )

    this.questionservice.Question(this.id).subscribe(
      (data:any)=>{
        this.question=data;
        console.log(data.length)

        if(data.length>0)
        {
          this.timer=this.question.length *2 *60;

          this.preventBackButton();

          this.startTimer()
          console.log(data)

        }
      }
    )


  }

  preventBackButton()
  {
    history.pushState(null,null,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,null,location.href);
    })

  }

  submit()
  {
    this.questionservice.submitQuestions(this.question).subscribe(
      (data:any)=>{
        this.isSubmit=true
        this.attempted=data.AteemtQuestion;
        this.correctAnswer=data.CorrectAnswer;
        this.marksGot=Number(data.MarksGot).toFixed(2);
        this.submitindb(data);
      }
    )



  }
  submitindb(data:any)
  {


      this.quizattempt.quiz=this.quiz

      this.quizattempt.userId=this.user.id;


     this.quizattempt.correct_answer=data.CorrectAnswer;

     this.quizattempt.marks=Number(data.MarksGot).toFixed(2);;

     this.quizattempt.questions_Attempts=data.AteemtQuestion;


    this.quizAttemptsService.addQuizAttempts(this.quizattempt).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )

  }

  submitQuiz()
  {
    Swal.fire({
      title:'Do you want to submit the quiz?',
      showCancelButton:true,
      confirmButtonText:'Submit',
      denyButtonText:`Don't Save`,
      icon:'info',
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.submit();
      }
    })
  }
  startTimer()
  {
    let t:any=window.setInterval(()=>{
      if(this.timer<=0)
      {
        this.submit();
        clearInterval(t)
      }
      else
      {
        this.timer--;
      }
    },1000)
  }
  getFormattedTime()
  {
    let mm= Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} min : ${ss} sec`
  }
  print()
  {
    window.print()
  }




}
