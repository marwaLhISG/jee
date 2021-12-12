import { Routes } from '@angular/router';
import { EnseignantComponent } from 'app/pages/enseignant/enseignant.component';
import { DepartementComponent } from 'app/pages/departement/departement.component';
import { SpecialiteComponent } from 'app/pages/specialite/specialite.component';
import { ErrorPageComponent } from 'app/pages/error-page/error-page.component';
import { addetudiantComponent } from 'app/pages/etudiant/addetudiant/addetudiant.component';
import { UpdateDepartementComponent } from 'app/pages/departement/update-departement/update-departement.component';
import { AddDepartementComponent } from 'app/pages/departement/add-departement/add-departement.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { EditEtudiantComponent } from './pages/etudiant/editetudiant.component';

export const AppRoutes: Routes = [
    { path: 'dashboard',         component: DashboardComponent },
    { path: 'etudiants',         component: EtudiantComponent},
    { path: 'etudiants/update/:id' , component: EditEtudiantComponent},
    { path: 'etudiants/add' , component: addetudiantComponent},
    { path: 'enseignants' ,  component: EnseignantComponent},
    { path: 'departements' , component: DepartementComponent},
    { path: 'departements/update/:id' , component: UpdateDepartementComponent},
    { path: 'departements/add' , component: AddDepartementComponent},
    { path: 'specialites' ,  component: SpecialiteComponent},
    { path: '**',             component : ErrorPageComponent}
];
