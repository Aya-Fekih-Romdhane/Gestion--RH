import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin ={
    email:'',
    password:''
  }

  constructor( private auth : AuthService ,
    private router : Router) { }

  ngOnInit(): void {
  }
   token : any ;
  login(){
    this.auth.login(this.admin)
    .subscribe(
      res=>{
         this.token = res;
         localStorage.setItem('token' , this.token.myToken)
          console.log(res); 
          this.router.navigate(['/dashboard'])
      },
      err=>{
       console.log(err);
       Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Votre email ou mot de passe est incorrect !',
        showConfirmButton: false,
        timer: 1500
      }) 
      }
    )
  }
}
