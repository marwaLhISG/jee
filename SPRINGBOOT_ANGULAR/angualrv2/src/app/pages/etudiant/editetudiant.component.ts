import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { etudiant } from 'src/app/models/etudiant';
import { specialite } from 'src/app/models/specialite';
import { DepartementService } from 'src/app/services/departement.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-editetudiant',
  templateUrl: './editetudiant.component.html'
})
export class EditEtudiantComponent implements OnInit {

  id : string | undefined;

  etudiant : etudiant | undefined;

  departements : Departement[] |undefined;

  specialites : specialite[] | undefined;

  activateLoader : boolean = true;

  button : string = ''

  constructor(protected req: ActivatedRoute
              ,protected router : Router
              ,protected etudiantService : EtudiantService
              ,protected departemntService : DepartementService
              ,protected specialite : SpecialiteService ) {

    this.req.params.subscribe({
      next : data=>{
        this.id = data['id']
      }
    });
  }
  

  ngOnInit(): void {
    this.initEtudiant();
  }

  initEtudiant(){
    this.departemntService.Get().subscribe({
      next : data =>{
        this.departements = data;
      },
      error : error =>{
        console.log(error);
      }
    });
    this.specialite.Get().subscribe({
      next : data =>{
        this.specialites = data;
      },
      error : error =>{
        console.log(error);
      }
    });
    if(this.id === undefined){
      this.etudiant = new etudiant();
      this.activateLoader = false;
    }
    else{
      this.etudiantService.getById(this.id).subscribe({
        next : data=>{
          this.etudiant = data;
          this.activateLoader = false;
        },
        error : error=>{
          console.log(error);
          this.activateLoader = false;
          this.router.navigate(['**']);
        }
      });
    }
  }
  onSubmit(){
    console.log(this.etudiant);
    this.etudiantService
      .put(this.etudiant as etudiant)
      .subscribe({ next: data => {
            this.router.navigate(['/etudiants']);
      },
      error : error=>{
        console.log(error)
      }
    });
  }
}
