import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizAttemptsService {

  constructor(private http:HttpClient) { }

  addQuizAttempts(data:any)
  {
    return this.http.post(`${baseUrl}/quizattempt`,data)
  }
  getQuizAttempts(data:any)
  {
    return this.http.get(`${baseUrl}/quizattempt/user/${data}`)
  }

}
