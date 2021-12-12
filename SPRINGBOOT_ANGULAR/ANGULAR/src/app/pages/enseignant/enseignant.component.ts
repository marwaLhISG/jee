import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'app/models/enseignant';
import { EnseignantService } from 'app/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html'
})
export class EnseignantComponent implements OnInit {

  readonly route : string = "enseignants";

  public enseignants : Enseignant[] | undefined;

  constructor(private enseignantservice : EnseignantService,private router : Router) { 
    this.enseignants = [];
  }

  ngOnInit(): void {
    this.enseignantservice.Get().subscribe(res=>{
      this.enseignants = res;
      console.log(this.enseignants);
    });
  }
  Edit(id : number){
    this.router.navigate([this.route+'/', id]);
  }
  Add(){
    this.router.navigate([this.route]);
  }
}
