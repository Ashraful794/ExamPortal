import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  getCategories()
  {
    return this.http.get(`${baseUrl}/category`)
  }

  addCategory(data:any)
  {
      return this.http.post(`${baseUrl}/category`,data);
  }

}
