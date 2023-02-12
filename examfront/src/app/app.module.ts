import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { HttpClientModule} from '@angular/common/http'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component'
import { MatCardModule} from '@angular/material/card'
import{MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {authInterceptorProviders} from './services/auth.interceptor';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component'
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ViewCategoriesComponent } from './components/view-categories/view-categories.component';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { ViewQuizesComponent } from './components/view-quizes/view-quizes.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './components/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { UpdateQuestionsComponent } from './components/update-questions/update-questions.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { QuizAttemptsComponent } from './components/quiz-attempts/quiz-attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionsComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionComponent,
    StartQuizComponent,
    QuizAttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
