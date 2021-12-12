import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'app/models/departement';
import { DepartementService } from 'app/services/departement.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  departement : Departement;
  constructor(protected router : Router
    ,private toastr: ToastrService
    ,protected departemntService : DepartementService) { }

  ngOnInit(): void {
    this.departement = new Departement();
  }

  onSubmit(){
    console.log(this.departement);
    this.departemntService
      .post(this.departement)
      .subscribe({ next: data => {
        if(data === 'OK'){
            this.infoNotification('Departement Ajouter Avec succès');
            this.router.navigate(['/Departements']);
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
