import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getquiz()
  {
    return this.http.get(`${baseUrl}/quiz`);
  }
  addquiz(data:any)
  {
    return this.http.post(`${baseUrl}/quiz`,data);
  }
  deletequiz(id:number)
  {
    return this.http.delete(`${baseUrl}/quiz/${id}`);
  }

  getSinglequiz(id:any)
  {
    return this.http.get(`${baseUrl}/quiz/${id}`)
  }
  updateQuiz(data:any)
  {
    return this.http.put(`${baseUrl}/quiz`,data);
  }
  findByCategory(id:any)
  {
    return this.http.get(`${baseUrl}/quiz/category/${id}`)
  }


  getActiveQuiz()
  {
    return this.http.get(`${baseUrl}/quiz/active`);
  }
  getQuizByCategoryAndActive(id:any)
  {
    return this.http.get(`${baseUrl}/quiz/category/${id}/active`)
  }

}
