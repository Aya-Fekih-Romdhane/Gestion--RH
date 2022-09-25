import { Component, OnInit } from '@angular/core';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listclt',
  templateUrl: './listclt.component.html',
  styleUrls: ['./listclt.component.css']
})
export class ListcltComponent implements OnInit {

  clients : any;

  constructor(private dataclt : DataclientService) { }

  ngOnInit(): void {
    this.dataclt.getAll()
    .subscribe(
      res=>{
        console.log(res);
        this.clients=res;
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
        this.dataclt.delete(id)
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
