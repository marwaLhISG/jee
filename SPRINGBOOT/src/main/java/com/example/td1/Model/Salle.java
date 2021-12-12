package com.example.td1.Model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@SuppressWarnings("serial")
@Entity
	@Table(name ="salle")
	public class Salle implements Serializable {
	    private Long numS;
	    private String nomS;
	    private String capacite;
	     public Salle() {

	    }
	    
	    public Salle(String nomS) {
	        this.nomS = nomS;
	    }
	    
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    public Long getnumS() {
	        return numS;
	    }

	    public void setnumS(Long numS) {
	        this.numS = numS;
	    }
	    
	    
	    public String getNomS() {
	        return nomS;
	    }

	    public void setNomS(String nomS) {
	        this.nomS = nomS;
	    }
	    
	    public String getCapacite() {
	        return capacite;
	    }

	    public void setCapacite(String capacite) {
	        this.capacite = capacite;
	    }
	    
	    @OneToOne(mappedBy = "salleName")
	    private Cours cours_Salle;

}
