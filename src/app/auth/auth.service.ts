import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  admin={
    email:'koechkelvin2001@@gmail.com',
    password:'12345678'
  }
  
  login(){
    return this.admin
  }

  isAuthenticated(){
       
    return this.admin.email == localStorage.getItem('email') && this.admin.password == localStorage.getItem('password')
  }
}
