import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  departement : Departement = new Departement();
  constructor(protected router : Router
    ,protected departemntService : DepartementService) { }

  ngOnInit(): void {
    this.departement = new Departement();
  }

  onSubmit(){
    console.log(this.departement);
    this.departemntService.post(this.departement).subscribe(
      {next: data => {this.router.navigate(['/departements']);},
      error : err=>{console.log(err) }
    });
  }

}
