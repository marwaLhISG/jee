import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { specialite } from 'src/app/models/specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.css']
})
export class AddSpecialiteComponent implements OnInit {

  specialite : specialite = new specialite();
  id : string = '';
  constructor(private service : SpecialiteService
            ,private router : Router) { 



    }

  ngOnInit(): void {
    this.service.getById(this.id).subscribe({
      next : data=>{
        this.specialite = data;
      }
    })
  }

  onSubmit(){
    this.service.post(this.specialite).subscribe({
      next : data=>{
        this.router.navigate(['specialites']);
      },
      error:err=>{
          console.log(err)
      }
    })
  }

}
