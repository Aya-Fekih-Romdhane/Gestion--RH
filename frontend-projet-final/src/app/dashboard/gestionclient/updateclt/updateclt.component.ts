import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateclt',
  templateUrl: './updateclt.component.html',
  styleUrls: ['./updateclt.component.css']
})
export class UpdatecltComponent implements OnInit {

  id :any ;
  client :any;
  image :any;

  selectImage(e : any){
    this.image= e.target.files[0];
  }
  constructor( private act : ActivatedRoute,
    private dataclt : DataclientService,
    private router : Router) { }

  ngOnInit(): void {
 
    this.id= this.act.snapshot.paramMap.get('id');
    //get employee by id
    this.dataclt.getById(this.id)
    .subscribe(
      res=>{
        this.client=res;
        console.log(this.client);
        
      },
      err=>{
        console.log(err);
      }

    )
  }

  modifier(){
    let fd = new FormData()
    fd.append('name',this.client.name)
    fd.append('description',this.client.description)
    fd.append('entreprise',this.client.entreprise)
    fd.append('titre_projet',this.client.titre_projet)
    fd.append('image',this.image)
   

    if (this.image){
      fd.append('image',this.image);
    }else{
      fd.append('image',this.client.image);
    }

    this.dataclt.update(this.id,fd)
    .subscribe(
      res=>{

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Employee has been saved',
          showConfirmButton: false,
          timer: 1500
        })
         this.router.navigate(['/dashboard/gestionclient/list']);
      },
      err=>{
        console.log(err);      
      }
    )

  }
}
