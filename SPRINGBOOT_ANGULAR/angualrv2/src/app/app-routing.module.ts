import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './pages/departement/add-departement/add-departement.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { UpdateDepartementComponent } from './pages/departement/update-departement/update-departement.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { addetudiantComponent } from './pages/etudiant/addetudiant/addetudiant.component';
import { EditEtudiantComponent } from './pages/etudiant/editetudiant.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { AddSpecialiteComponent } from './pages/specialite/add-specialite/add-specialite.component';
import { SpecialiteComponent } from './pages/specialite/specialite.component';
import { UpdateSpecialiteComponent } from './pages/specialite/update-specialite/update-specialite.component';

export const AppRoutes: Routes = [
  { path: 'etudiants',         component: EtudiantComponent},
  { path: 'etudiants/update/:id' , component: EditEtudiantComponent},
  { path: 'etudiants/add' , component: addetudiantComponent},
  { path: 'departements' , component: DepartementComponent},
  { path: 'departements/update/:id' , component: UpdateDepartementComponent},
  { path: 'departements/add' , component: AddDepartementComponent},
  { path: 'specialites' ,  component: SpecialiteComponent},
  { path: 'specialites/update/:id' ,  component: UpdateSpecialiteComponent},
  { path: 'specialites/add' ,  component: AddSpecialiteComponent},
  { path: '**',             component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
