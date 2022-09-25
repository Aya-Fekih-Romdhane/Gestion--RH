import { DataemployeeService } from './../../../services/dataemployee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  departement :any;
  id :any ;
  employee : any;
  image :any;

  selectImage(e : any){
    this.image= e.target.files[0];
  }
  constructor(private datadep : DatadepService ,
    private act : ActivatedRoute,
    private dataemp : DataemployeeService,
    private router : Router) { }

  ngOnInit(): void {
    //get all departements

    this.datadep.getAll()
    .subscribe(
      res=>{
        this.departement=res;
      },
      err=>{
        console.log(err);
        
      }
    )
    this.id= this.act.snapshot.paramMap.get('id');
    //get employee by id
    this.dataemp.getById(this.id)
    .subscribe(
      res=>{
        this.employee=res;
        console.log(this.employee);
        
      },
      err=>{
        console.log(err);
      }

    )
  }

  modifier(){
    let fd = new FormData()
    fd.append('name',this.employee.name);
    fd.append('lastname',this.employee.lastname);
    fd.append('email',this.employee.email);
    fd.append('adress',this.employee.adress);
    fd.append('tel',this.employee.tel);
    fd.append('idDep',this.employee.idDep);
   

    if (this.image){
      fd.append('image',this.image);
    }else{
      fd.append('image',this.employee.image);
    }

    this.dataemp.update(this.id,fd)
    .subscribe(
      res=>{

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Employee has been saved',
          showConfirmButton: false,
          timer: 1500
        })
         this.router.navigate(['/dashboard/gestionemployee/list']);
      },
      err=>{
        console.log(err);      
      }
    )

  }




}
