import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-update-etudiants',
  templateUrl: './update-etudiants.component.html',
  styleUrls: ['./update-etudiants.component.css']
})
export class UpdateEtudiantsComponent implements OnInit {
  et : etudiant = new etudiant();
  id : string ='';
  constructor(private service :HttpClient,private route :ActivatedRoute) {
     route.params.subscribe(route=>{
       this.id = route['id']
     })
   }

  ngOnInit(): void {
    this.service.get<etudiant>('http://localhost:8080/etudiants/GetByID/'+ this.id).subscribe({
      next : data=>{
          this.et = data;
      }
    })
  }

}
