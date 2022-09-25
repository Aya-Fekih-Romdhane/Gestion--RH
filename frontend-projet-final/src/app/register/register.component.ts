import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin ={
    name :'',
    email:'',
    password:''
  }

  constructor(private auth : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }
  register(){
    this.auth.register(this.admin)
    .subscribe(
      res=>{
        Swal.fire({
          position:'center',
          icon:'success',
          title:'your account has been created!!',
          showConfirmButton:false,
          timer:1500
        })
        this.router.navigate(['/login']);  
      },
      err=>{
        console.log(err);
        Swal.fire({
          position:'top-end',
          icon:'error',
          title:'Email already Used !!',
          showConfirmButton:false,
          timer:1500
        })
      }
    )

  }

}
