import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/layout/navbar/navbar.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { AjoutdepartementComponent } from './dashboard/gestiondepartement/ajoutdepartement/ajoutdepartement.component';
import { UpdatedepartementComponent } from './dashboard/gestiondepartement/updatedepartement/updatedepartement.component';
import { ListdepartementComponent } from './dashboard/gestiondepartement/listdepartement/listdepartement.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { UpdateEmpComponent } from './dashboard/gestionemployee/update-emp/update-emp.component';
import { UpdatecltComponent } from './dashboard/gestionclient/updateclt/updateclt.component';
import { AjoutcltComponent } from './dashboard/gestionclient/ajoutclt/ajoutclt.component';
import { ListcltComponent } from './dashboard/gestionclient/listclt/listclt.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    GestionemployeeComponent,
    GestionclientComponent,
    GestiondepartementComponent,
    AjoutdepartementComponent,
    UpdatedepartementComponent,
    ListdepartementComponent,
    AjoutempComponent,
    ListempComponent,
    UpdateEmpComponent,
    UpdatecltComponent,
    AjoutcltComponent,
    ListcltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
