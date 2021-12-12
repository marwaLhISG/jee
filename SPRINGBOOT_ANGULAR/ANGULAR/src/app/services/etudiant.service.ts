import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  readonly rootapi = 'http://localhost:8080/etudiants/';
  constructor(private service : HttpClient) { 

  }

  Get() : Observable<etudiant[]>{
    return this.service.get<etudiant[]>(this.rootapi + 'GetAll');
  }

  getById(id : string) : Observable<etudiant>{
    return this.service.get<etudiant>(this.rootapi + 'GetByID/' + id)
  }

  post(etudiant : etudiant): Observable<string>{
    return this.service.post<string>(this.rootapi +'Add',etudiant)
  }
  put(etudiant : etudiant): Observable<string>{
    return this.service.put<string>(this.rootapi +'Update',etudiant)
  }
  delete(id : string){
    return this.service.delete<string>(this.rootapi + 'Delete/' +id)
  }
}
