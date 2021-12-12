import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { etudiant } from 'app/models/etudiant';
import { EtudiantService } from 'app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html'
})
export class EtudiantComponent implements OnInit {

  readonly route : string = "etudiants";

  public etudiants : etudiant[] | undefined;

  button : boolean = true

  constructor(private etudiantservice : EtudiantService,private router : Router) { 
  }

  ngOnInit(): void {
    
    this.etudiantservice.Get().subscribe({
      next : data=>{
        this.button = false;
        this.etudiants = data;
      },
      error : error=>{
        this.button = false;
      }
      
    })
  }
  Edit(id : number){
    this.router.navigate([this.route + '/update/', id]);
  }
  Add(){
    this.router.navigate([this.route + '/add']);
  }
}
