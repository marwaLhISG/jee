import { etudiant } from "./etudiant";

export class Departement{
    idDepartement:number | undefined;
    nomDepartement:string | undefined;
    etudiants : etudiant[] | undefined;
}