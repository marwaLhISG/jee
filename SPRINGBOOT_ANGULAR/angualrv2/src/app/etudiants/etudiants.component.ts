import { Component, OnInit } from '@angular/core';
import { etudiant } from '../models/etudiant';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants:etudiant[] | undefined;
  constructor(private httpservice: HttpClient,private route : Router) { }

  ngOnInit(): void {
    this.httpservice.get<etudiant[]>('http://localhost:8080/etudiants/GetAll').subscribe(
      {next : data=>{
        this.etudiants = data
        console.log(this.etudiants)
      }}
    )
  }
  update(id : string | undefined){
      this.route.navigate(['/update/'+id]);
  }
}
