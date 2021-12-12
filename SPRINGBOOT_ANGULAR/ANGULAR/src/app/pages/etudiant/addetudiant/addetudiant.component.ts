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
              ,private toastr: ToastrService
              ,protected departemntService : DepartementService
              ,protected specialite : SpecialiteService ) {
  }
  

  ngOnInit(): void {
    this.etudiant = new etudiant();
  }
  onSubmit(){
    console.log(this.etudiant);
    this.etudiantService
      .post(this.etudiant)
      .subscribe({ next: data => {
            this.infoNotification('etudiant Ajouter Avec succès');
            this.router.navigate(['/etudiants']);
        
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
