import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { specialite } from 'src/app/models/specialite';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-update-specialite',
  templateUrl: './update-specialite.component.html',
  styleUrls: ['./update-specialite.component.css']
})
export class UpdateSpecialiteComponent implements OnInit {

  specialite : specialite = new specialite();
  id : string = '';
  constructor(private route : ActivatedRoute
            ,private service : SpecialiteService
            ,private router : Router) { 

              this.route.params.subscribe({
                next:data=>{
                  this.id=data['id']
                }
              })

    }

  ngOnInit(): void {
    this.service.getById(this.id).subscribe({
      next : data=>{
        this.specialite = data;
      }
    })
  }

  onSubmit(){
    this.service.put(this.specialite).subscribe({
      next : data=>{
        this.router.navigate(['specialites']);
      },
      error:err=>{
          console.log(err)
      }
    })
  }

}
