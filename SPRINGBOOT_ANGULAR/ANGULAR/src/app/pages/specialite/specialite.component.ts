import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { specialite } from 'app/models/specialite';
import { SpecialiteService } from 'app/services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html'
})
export class SpecialiteComponent implements OnInit {

  readonly route : string = "specialites";

  public specialites : specialite[] | undefined;

  constructor(private specialiteservice : SpecialiteService,private router : Router) { 
    this.specialites = [];
  }

  ngOnInit(): void {
    this.specialiteservice.Get().subscribe(res=>{
      this.specialites = res;
      console.log(this.specialites);
    });
  }
  Edit(id : number){
    this.router.navigate([this.route+'/', id]);
  }
  Add(){
    this.router.navigate([this.route]);
  }
}
