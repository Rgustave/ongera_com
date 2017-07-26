// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



import {Component,OnInit} from '@angular/core'
import{AuthService} from './auth.service'
import{Router} from '@angular/router'
import{FormControl,FormGroup} from '@angular/forms'


@Component({
  
  template:`<div class="login">
   <div class = "">
     <img class = "login-logo" src="app/assets/images/logoongera.png" alt="Ongera Logo">
   </div>



<div class="login-form">
  <form #loginForm="ngForm" (ngSubmit)="login(loginForm.value)" autocomplete="off" novalidate>
    <div class="form-group" >
      <!--<label for="userName">User Name:</label>-->
      <div class="login-title">
       <h4>Username:</h4>
        <em *ngIf="loginForm.controls.userName?.invalid && (loginForm.controls.userName?.touched || mouseoverLogin)">Required</em>
      </div>
      <input (ngModel) ="userName" name ="userName" required id="userName" type="text"  placeholder="User Name..."/>
    </div>
    <div class="form-group" >
      <!--<label  for="password">Password:</label>-->
      <div class="login-title">
          <h4>Password:</h4>
          <em *ngIf="loginForm.controls.password?.invalid && (loginForm.controls.password?.touched || mouseoverLogin)">Required</em>
      </div>
      <input (ngModel) ="password" name ="password" required id="password"  type="password"placeholder="Password..."/>
    </div> 
    <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">       
    <button type="submit" [disabled]="loginForm.invalid" class="login-button">Login</button>
    <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
    </span>
    <div *ngIf="error" class="alert alert-danger login-error">{{error}}</div>

  </form>
</div>

</div>`,
   styleUrls: ['./home.component.css']


})

export class LoginComponent{
         loginForm:FormGroup

 loading = false
 error = ''
 user  ={ username :"",
          password : ""
               }

constructor(private authService:AuthService, private router:Router){

}

  ngOnInit(){

   
       }


 login(formValues){
    this.loading = true
     this.user.username = formValues.userName
     this.user.password = formValues.password

    console.log(formValues.userName,formValues.password)
    console.log(this.user.password)

    this.authService.loginUser(this.user)
       .subscribe(result =>{
      
            if(result){
              console.log(result)
                  this.router.navigate(['/subroute'])

            }
       },(err)=>{
               this.error = 'Username or Passowrd is incorrect'
               this.loading = false
       })

 }  
}


