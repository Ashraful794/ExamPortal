import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  getQuestions(id:any)
  {
    return this.http.get(`${baseUrl}/quesstions/quiz/all/${id}`)
  }
  addQuestion(data:any)
  {
    return this.http.post(`${baseUrl}/quesstions`,data);
  }
  deleteQuestion(id:any)
  {
    return this.http.delete(`${baseUrl}/quesstions/${id}`);
  }
  update(data:any)
  {
    return this.http.put(`${baseUrl}/quesstions`,data);
  }
  getQuestion(id:any)
  {
    return this.http.get(`${baseUrl}/quesstions/${id}`)
  }

  Question(id:any)
  {
    return this.http.get(`${baseUrl}/quesstions/quiz/${id}`)
  }
  submitQuestions(data:any)
  {
    return this.http.post(`${baseUrl}/quesstions/submitQuestion`,data);
  }
}
