import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  readonly rootapi = 'http://localhost:8080/departements/';
  constructor(private service : HttpClient) { 

  }

  Get() : Observable<Departement[]>{
    return this.service.get<Departement[]>(this.rootapi + 'GetAll');
  }

  getById(id : string) : Observable<Departement>{
    return this.service.get<Departement>(this.rootapi +'GetByID/'+ id)
  }

  post(Departement : Departement) : Observable<string>{
    return this.service.post<string>(this.rootapi +'Add',Departement)
  }
  put(Departement : Departement): Observable<string>{
    return this.service.put<string>(this.rootapi +'Update',Departement)
  }
  delete(id : string){
    return this.service.delete<string>(this.rootapi + 'Delete/' +id)
  }
}
