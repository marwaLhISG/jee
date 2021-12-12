package com.example.td1.Model;
import java.util.Collection;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Departement{
     @Id
     @GeneratedValue(strategy=GenerationType.IDENTITY) 
     
     private Long idDepartement;
     private String nomDepartement;
     
     @OneToMany (mappedBy="iddepartement", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
     private Collection<Etudiant> etudiants;
     
     public Long getIdDepartement() 
     
     {return idDepartement;
     }
     public void setIdDepartement(Long idDepartement) 
     
     {
    	 this.idDepartement = idDepartement;
    	 }
     public String getNomDepartement()
     {return nomDepartement;}
     
     public void setNomDepartement(String nomDepartement)
     {this.nomDepartement = nomDepartement;}
     
     public Collection<Etudiant> getEtudiants()
     {return etudiants;}
     public void setEtudiants(Collection<Etudiant> etudiants) 
     {this.etudiants = etudiants;}
	
}