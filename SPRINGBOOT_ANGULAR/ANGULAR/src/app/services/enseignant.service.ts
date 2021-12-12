import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Enseignant } from '../models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  readonly rootapi = 'http://localhost:8080/enseignants';
  constructor(private service : HttpClient) { 

  }

  Get() : Observable<Enseignant[]>{
    return this.service.get<Enseignant[]>(this.rootapi + 'GetAll');
  }

  getById(id : string) : Observable<Enseignant>{
    return this.service.get<Enseignant>(this.rootapi + 'GetByID/' + id)
  }

  post(Enseignant : Enseignant){
    this.service.post<Enseignant>(this.rootapi +'Add',Enseignant)
  }
  put(Enseignant : Enseignant): Observable<string>{
    return this.service.put<string>(this.rootapi +'Update',Enseignant)
  }
  delete(id : string){
    return this.service.delete<string>(this.rootapi + 'Delete/' +id)
  }
}
