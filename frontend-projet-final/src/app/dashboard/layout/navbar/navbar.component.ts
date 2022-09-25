import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthService) { }

  dataUser : any ;

  ngOnInit(): void {
   this.dataUser = this.auth.getDataFromToken();
   console.log(this.dataUser);
   
  }
  logOut(){
    this.auth.logOut();
  }

}
