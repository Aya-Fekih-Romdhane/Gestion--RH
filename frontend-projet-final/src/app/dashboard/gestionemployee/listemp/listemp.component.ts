import { DataemployeeService } from './../../../services/dataemployee.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employees : any;

  constructor(private dataemp : DataemployeeService) { }

  ngOnInit(): void {
    this.dataemp.getAll()
    .subscribe(
      res=>{
        console.log(res);
        this.employees=res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  delete(id : any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataemp.delete(id)
        .subscribe(
          res=>{
            this.ngOnInit();
          },
          err=>{
            console.log(err);
            
          }
        )
      }
    })

  }

}
