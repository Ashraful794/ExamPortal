import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizAttemptsComponent } from './components/quiz-attempts/quiz-attempts.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { UpdateQuestionsComponent } from './components/update-questions/update-questions.component';
import { UpdateQuizComponent } from './components/update-quiz/update-quiz.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { ViewQuizesComponent } from './components/view-quizes/view-quizes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileGuard } from './services/profile.guard';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'sign-up', component:SignupComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},

  {path:'start-quiz/:id',component:StartQuizComponent,canActivate:[NormalGuard]},
  {path:'quiz-attempts', component:QuizAttemptsComponent,canActivate:[NormalGuard]},
  {path:'profile',component:ProfileComponent ,canActivate:[ProfileGuard]},




  {path:'user-dashboard', component:UserDashboardComponent,
  children:[

    {path:':id',component:LoadQuizComponent},
    {path:'instruction/:id',component:InstructionComponent},


  ]
  ,canActivate:[NormalGuard]},

  {path:'admin-dashboard', component:AdminDashboardComponent,
  children:  [
    {path:'',component:WelcomeComponent},
 //   {path:'profile',component:ProfileComponent},
    {path:'view-categories' ,component:ViewCategoriesComponent},
    {path:'add-category' ,component:AddCategoriesComponent},
    {path:'view-quizes' , component:ViewQuizesComponent},
    {path:'add-quiz' , component:AddQuizComponent},
    {path:'update-quiz/:id' , component:UpdateQuizComponent},
    {path:'view-questions/:id/:title' , component:ViewQuestionsComponent},
    {path:'add-questions/:id/:title' , component:AddQuestionComponent},
    {path:'update-questions/:id' , component:UpdateQuestionsComponent},

  ],canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
