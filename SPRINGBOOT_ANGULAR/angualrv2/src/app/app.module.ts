import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { DepartementsComponent } from './departements/departements.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEtudiantsComponent } from './etudiants/update-etudiants/update-etudiants.component';
import { AddDepartementComponent } from './pages/departement/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './pages/departement/update-departement/update-departement.component';
import { addetudiantComponent } from './pages/etudiant/addetudiant/addetudiant.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { SpecialiteComponent } from './pages/specialite/specialite.component';
import { EditEtudiantComponent } from './pages/etudiant/editetudiant.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateSpecialiteComponent } from './pages/specialite/update-specialite/update-specialite.component';
import { AddSpecialiteComponent } from './pages/specialite/add-specialite/add-specialite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtudiantComponent,
    EditEtudiantComponent,
    SpecialiteComponent,
    DepartementComponent,
    addetudiantComponent,
    UpdateDepartementComponent,
    AddDepartementComponent,
    NavbarComponent,
    EditEtudiantComponent,
    UpdateSpecialiteComponent,
    AddSpecialiteComponent,


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
