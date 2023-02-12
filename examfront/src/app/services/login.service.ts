import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../model/login-data';
import baseUrl from './helper';
import { User } from '../model/user';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginstatusSubjext= new Subject<boolean>();

  constructor(private httpclient:HttpClient) { }

  getCurrentUser()
  {
    return this.httpclient.get(`${baseUrl}/current-user`);
  }

  login(loginData:LoginData)
  {
    return this.httpclient.post(`${baseUrl}/login`,loginData);
  }

  loginUser(token:string)
  {
    localStorage.setItem('token',token);
    return true
  }

  isLoggedIn()
  {
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=='' ||  tokenStr==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  setUser(user:User)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUser()
  {
    let userStr=localStorage.getItem('user');
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      this.logout();
      return null;
    }
  }

  getUserRole()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }

}
