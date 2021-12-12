import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'app/models/departement';
import { etudiant } from 'app/models/etudiant';
import { specialite } from 'app/models/specialite';
import { DepartementService } from 'app/services/departement.service';
import { EtudiantService } from 'app/services/etudiant.service';
import { SpecialiteService } from 'app/services/specialite.service';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { PartialObserver } from 'rxjs';

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
              ,private toastr: ToastrService
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
      .put(this.etudiant)
      .subscribe({ next: data => {
        if(data === 'OK'){
            this.infoNotification('etudiant Ajouter Avec succès');
            this.router.navigate(['/etudiants']);
        }else{
          this.errorNotifiaction('Une erreur c"est produit')
        }
      },
      error : error=>{
        this.errorNotifiaction(error.message);
      }
    });
  }
  infoNotification(message : string){
    this.toastr.info(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+ message +'</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: "toast-top-right"
        }
      );
  }
  errorNotifiaction(message : string){
  this.toastr.error
          (
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+ message +'</span>',
              "",
              {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-error alert-with-icon",
                positionClass: "toast-top-right"
              }
            );
  }
}
