import { DatadepService } from './../../../services/datadep.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutdepartement',
  templateUrl: './ajoutdepartement.component.html',
  styleUrls: ['./ajoutdepartement.component.css']
})
export class AjoutdepartementComponent implements OnInit {

  departemenet ={
    name :'',
    description :'',
    salle :0,
    etage:0
  }
  
  constructor(private data : DatadepService , private router : Router) { }

  ajouter(){
   this.data.create(this.departemenet)
   .subscribe(
    res=>{
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Votre département a été ajouté',
        showConfirmButton: false,
        timer: 1500
      })
      
      this.router.navigate(['/dashboard/gestiondepartement/list']);

    },
    err=>{
      console.log(err);
      
    }
   )
  }

  ngOnInit(): void {
  }

}
