import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { etudiant } from 'src/app/models/etudiant';
import { specialite } from 'src/app/models/specialite';
import { DepartementService } from 'src/app/services/departement.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html'
})
export class addetudiantComponent implements OnInit {

  id : string | undefined;

  etudiant : etudiant | undefined;

  departements : Departement[] |undefined;

  specialites : specialite[] | undefined;

  constructor(protected router : Router
              ,protected etudiantService : EtudiantService
              ,protected departemntService : DepartementService
              ,protected specialite : SpecialiteService ) {
  }
  

  ngOnInit(): void {
    this.etudiant = new etudiant();
  }
  onSubmit(){
    console.log(this.etudiant);
    this.etudiantService
      .post(this.etudiant as etudiant)
      .subscribe({ next: data => {
            this.router.navigate(['/etudiants']);
      },
      error : error=>{
        console.log(error);
      }
    });
  }
}
