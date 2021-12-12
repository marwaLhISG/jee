import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'app/models/departement';
import { DepartementService } from 'app/services/departement.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  id: string;
  departement: Departement;

  constructor(protected req: ActivatedRoute
              ,protected router : Router
              ,protected etudiantService : DepartementService
              ,private toastr: ToastrService
              ,protected departemntService : DepartementService ) { 

      this.req.params.subscribe({
        next : data=>{
          this.id = data['id']
        }
      });
    }

  ngOnInit(): void {
    this.initDepartement();
  }

  initDepartement(){
    this.departemntService.getById(this.id).subscribe({
      next : data =>{
        this.departement = data;
      },
      error : error =>{
        console.log(error);
      }
    });
  }

  onSubmit(){
    console.log(this.departement);
    this.etudiantService
      .put(this.departement)
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

