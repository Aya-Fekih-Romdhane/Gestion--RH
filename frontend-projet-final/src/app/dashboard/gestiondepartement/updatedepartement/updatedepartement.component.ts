import { DatadepService } from './../../../services/datadep.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedepartement',
  templateUrl: './updatedepartement.component.html',
  styleUrls: ['./updatedepartement.component.css']
})
export class UpdatedepartementComponent implements OnInit {
 id : any ;

 departement :any ;
  constructor(private act : ActivatedRoute , private data : DatadepService , private router : Router ) { }

  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');
    this.data.getById(this.id)
    .subscribe(
      res=>{
       console.log(res);
       this.departement=res;
      },
      err=>{
       console.log(err);
       
      }
    )
  }

  modifier(){
    this.data.update(this.id , this.departement)
    .subscribe(
      res=>{

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre departement a ete modifié !',
          showConfirmButton: false,
          timer: 1500
        })
          this.router.navigate(['/dashboard/gestiondepartement/list']);
      },err=>{
        console.log(err);
        

      }
    )
  }

}
