import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  id: string ='';
  departement : Departement = new Departement();

  constructor(protected req: ActivatedRoute
              ,protected router : Router
              ,protected etudiantService : DepartementService
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
      .subscribe({ next: data=> {
        this.router.navigate(['/departements']);
      },
      error : error=>{
        console.log(error.message);
      }
    });
  }
}

