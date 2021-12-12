package com.example.td1.Model;
import java.io.Serializable;
import java.util.List;
import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Enseignant implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id 
	@GeneratedValue
	private Long matricule;
	private String nomENS;
	private String prenomENS;
	private String adresseENS;
	private String diplome;
	@ManyToOne
	private Cours cours;
	
	@ManyToMany
	@JoinTable(name = "etudiant_enseignant", joinColumns = @JoinColumn(name = "student_id"), inverseJoinColumns = @JoinColumn(name = "enseignant_id"))
	List<Etudiant> ListEtudiant;
	
	
	
	
	public Departement getDepartementEns1() {
		return departementEns1;
	}
	public void setDepartementEns1(Departement departementEns) {
		this.departementEns1 = departementEns;
	}
	@ManyToOne
	private Departement departementEns1;
	public Long getMatricule1() {
		return matricule;
	}
	public void setMatricule1(Long matricule) {
		this.matricule = matricule;
	}
	public String getNomENS1() {
		return nomENS;
	}
	public Cours getCours() {
		return cours;
	}
	public void setCours(Cours cours) {
		this.cours = cours;
	}
	public Departement getDepartementEns() {
		return departementEns1;
	}
	public void setDepartementEns(Departement departementEns) {
		this.departementEns1 = departementEns;
	}
	@ManyToOne
	private Departement departementEns;
	public Long getMatricule() {
		return matricule;
	}
	public void setMatricule(Long matricule) {
		this.matricule = matricule;
	}
	public String getNomENS() {
		return nomENS;
	}
	public void setNomENS(String nomENS) {
		this.nomENS = nomENS;
	}
	public String getPrenomENS() {
		return prenomENS;
	}
	public void setPrenomENS(String prenomENS) {
		this.prenomENS = prenomENS;
	}
	public String getAdresseENS() {
		return adresseENS;
	}
	public void setAdresseENS(String adresseENS) {
		this.adresseENS = adresseENS;
	}
	public String getDiplome() {
		return diplome;
	}
	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}
	public Departement getDepartements() {
		return departementEns1;
	}
	public void setDepartements(Departement departements) {
		this.departementEns1 = departements;
	}
	public Enseignant(String nomENS, String prenomENS, String adresseENS, String diplome) {
		super();
		this.nomENS = nomENS;
		this.prenomENS = prenomENS;
		this.adresseENS = adresseENS;
		this.diplome = diplome;
	}
}


