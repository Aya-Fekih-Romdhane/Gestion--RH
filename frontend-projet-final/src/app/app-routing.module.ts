import { UpdatecltComponent } from './dashboard/gestionclient/updateclt/updateclt.component';
import { ListcltComponent } from './dashboard/gestionclient/listclt/listclt.component';
import { AjoutcltComponent } from './dashboard/gestionclient/ajoutclt/ajoutclt.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { AjoutdepartementComponent } from './dashboard/gestiondepartement/ajoutdepartement/ajoutdepartement.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { ListdepartementComponent } from './dashboard/gestiondepartement/listdepartement/listdepartement.component';
import { UpdatedepartementComponent } from './dashboard/gestiondepartement/updatedepartement/updatedepartement.component';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { UpdateEmpComponent } from './dashboard/gestionemployee/update-emp/update-emp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PassGuard } from './services/pass.guard';

const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},
 
  {path:'dashboard', canActivate : [PassGuard], component:DashboardComponent, children : [
 
 
    {path:'', redirectTo: 'gestiondepartement', pathMatch:'full'},
    
    {path:'gestionclient',component: GestionclientComponent , children:[

      {path:'', redirectTo: 'list', pathMatch:'full'},
      {path:'ajout',component:AjoutcltComponent},
      {path:'list',component:ListcltComponent},
      {path:'update/:id',component:UpdatecltComponent},


    ]},
    {path:'gestionemployee',component : GestionemployeeComponent, children:[

      {path:'', redirectTo: 'list', pathMatch:'full'},
      {path:'ajout',component:AjoutempComponent},
      {path:'list',component:ListempComponent},
      {path:'update/:id',component:UpdateEmpComponent},



    ]},
    {path:'gestiondepartement',component : GestiondepartementComponent ,children:[
     
    {path:'', redirectTo: 'list', pathMatch:'full'},
    {path:'ajout',component:AjoutdepartementComponent},
    {path:'list',component:ListdepartementComponent},
    {path:'update/:id',component:UpdatedepartementComponent},


    ] },


  ]},


  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
