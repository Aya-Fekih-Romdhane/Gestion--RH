import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutclt',
  templateUrl: './ajoutclt.component.html',
  styleUrls: ['./ajoutclt.component.css']
})
export class AjoutcltComponent implements OnInit {
  
  clients :any;

  client : any ={
    name:'',
    description:'',
    entreprise:'',
    titre_projet:'',
  
  }

  image:any;

  selectImage(e :any){
    this.image=e.target.files[0];
  }
  constructor(private dataclt : DataclientService,   private router :  Router ) { }



  ngOnInit(): void {

    this.dataclt.getAll()
    .subscribe(
      res=>{
        this.client =res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  ajout(){
    let fd = new FormData()
    fd.append('name',this.client.name)
    fd.append('description',this.client.description)
    fd.append('entreprise',this.client.entreprise)
    fd.append('titre_projet',this.client.titre_projet)
    fd.append('image',this.image)

    this.dataclt.create(fd)
    .subscribe(
      res=>{
        console.log(res);
        Swal.fire(
          'Good job!',
          'Your Employee has been added!',
          'success'
        )
        this.router.navigate(['/dashboard/gestionclient/list']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }

}
