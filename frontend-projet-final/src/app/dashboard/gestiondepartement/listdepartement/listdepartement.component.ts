import { Component, OnInit } from '@angular/core';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdepartement',
  templateUrl: './listdepartement.component.html',
  styleUrls: ['./listdepartement.component.css']
})
export class ListdepartementComponent implements OnInit {

  departement :any ;

  constructor(private data : DatadepService) { }

  ngOnInit(): void {

    this.data.getAll()
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

supprimer(id : any){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Êtes-vous sûr?',
    text: "vous voulez supprimer ce département !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, Supprimer!',
    cancelButtonText: 'Non, Annuler!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
     
      this.data.delete(id)
      .subscribe(
        res=>{
        this.ngOnInit();
        }
      )

    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Annulé',

      )
    }
  })

}


}

