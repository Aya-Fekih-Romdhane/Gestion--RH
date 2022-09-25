import { DataemployeeService } from './../../../services/dataemployee.service';
import { DatadepService } from './../../../services/datadep.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutemp',
  templateUrl: './ajoutemp.component.html',
  styleUrls: ['./ajoutemp.component.css']
})
export class AjoutempComponent implements OnInit {
  departement: any;
  employee = {
    name: '',
    lastname: '',
    email: '',
    adress: '',
    tel: '',
    idDep: ''
  }
  image: any;
  selectImage(e: any) {
    this.image = e.target.files[0];
  }
  constructor(private datadep: DatadepService,
    private dataemp: DataemployeeService,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.datadep.getAll()
      .subscribe(
        res => {
          this.departement = res;
        },
        err => {
          console.log(err);

        }
      )
  }
  ajout() {
    let fd = new FormData()
    fd.append('name', this.employee.name)
    fd.append('lastname', this.employee.lastname)
    fd.append('email', this.employee.email)
    fd.append('adress', this.employee.adress)
    fd.append('tel', this.employee.tel)
    fd.append('idDep', this.employee.idDep)
    fd.append('image', this.image)

    this.dataemp.create(fd)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Good job!',
            'Your Employee has been added!',
            'success'
          )
          this.router.navigate(['/dashboard/gestionemployee/list']);
        },
        err => {
          console.log(err);
        }
      )
  }
}
