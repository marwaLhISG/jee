import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html'
})
export class DepartementComponent implements OnInit {

  readonly route : string = "departements";

  public departements : Departement[] | undefined;

  constructor(private Departementservice : DepartementService,private router : Router) { 
    this.departements = [];
  }

  ngOnInit(): void {
    this.Departementservice.Get().subscribe(res=>{
      this.departements = res;
      console.log(this.departements);
    });
  }
  Edit(id : number |undefined){
    this.router.navigate([this.route+'/update/', id]);
  }
  Add(){
    this.router.navigate([this.route+'/add']);
  }
}
