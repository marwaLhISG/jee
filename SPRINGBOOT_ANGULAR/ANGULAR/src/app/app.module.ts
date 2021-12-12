import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { EtudiantComponent } from "./pages/etudiant/etudiant.component";
import { EditEtudiantComponent } from "./pages/etudiant/editetudiant.component";
import { EnseignantComponent } from "./pages/enseignant/enseignant.component";
import { SpecialiteComponent } from "./pages/specialite/specialite.component";
import { DepartementComponent } from "./pages/departement/departement.component";
import { addetudiantComponent } from "./pages/etudiant/addetudiant/addetudiant.component";
import { UpdateDepartementComponent } from "./pages/departement/update-departement/update-departement.component";
import { AddDepartementComponent } from "./pages/departement/add-departement/add-departement.component";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EtudiantComponent,
    EditEtudiantComponent,
    EnseignantComponent,
    SpecialiteComponent,
    DepartementComponent,
    addetudiantComponent,
    UpdateDepartementComponent,
    AddDepartementComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
