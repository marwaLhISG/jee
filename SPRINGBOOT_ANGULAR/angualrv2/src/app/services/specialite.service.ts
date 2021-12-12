import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  readonly rootapi = 'http://localhost:8080/specialite/';
  constructor(private service : HttpClient) { 

  }

  Get() : Observable<specialite[]>{
    return this.service.get<specialite[]>(this.rootapi + 'GetAll');
  }

  getById(id : string) : Observable<specialite>{
    return this.service.get<specialite>(this.rootapi + 'GetByID/' + id)
  }

  post(specialite : specialite) : Observable<string> {
    return this.service.post<string>(this.rootapi +'Add',specialite)
  }
  put(specialite : specialite): Observable<string>{
    return this.service.put<string>(this.rootapi +'Update',specialite)
  }
  
  delete(id : string){
    return this.service.delete<string>(this.rootapi + 'Delete/' +id)
  }
}
