package com.example.td1.Model;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Etudiant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long numE;
	private String nomE;
	private int niveau;
    private Date dateEntree;
    private double moyenne;
     public Long getNumE()
	{return numE;}
    public void setNumE(Long numE)
	{this.numE = numE;}
    public String getNomE()
	{return nomE;}
    public void setNomE(String nomE) 
	{this.nomE = nomE;}
	public int getNiveau()
	{return niveau;}
    public void setNiveau(int niveau) 
    {this.niveau = niveau;}
    public Date getDateEntree()
    {return dateEntree;}
    public void setDateEntree(Date dateEntree) 
    {this.dateEntree = dateEntree;}  
    

	@ManyToOne
	@JoinColumn(name="idSpecialite")
	private Specialite idspecialite;
	
	@ManyToOne
	@JoinColumn(name="idDept")
	private Departement iddepartement;
	
	@ManyToMany(mappedBy = "Courses")
	private List<Cours> listCours;
    public List<Cours> getListCours() {
		return listCours;
	}

	public void setListCours(List<Cours> listCours) {
		this.listCours = listCours;
	}

	@ManyToMany(mappedBy = "ListEtudiant")
	private List<Enseignant> listEnseignant;

	public List<Enseignant> getListEnseignant() {
		return listEnseignant;
	}

	public void setListEnseignant(List<Enseignant> listEnseignant) {
		this.listEnseignant = listEnseignant;}

	
	public Specialite getIdspecialite()
	{return idspecialite;}
	@JsonIgnore
	public void setIdspecialite(Specialite idspecialite)
	{this.idspecialite = idspecialite;}
	@JsonIgnore
	public Departement getIddepartement() 
	{return iddepartement;}
	@JsonIgnore
	public void setIddepartement(Departement iddepartement)
	{
		this.iddepartement = iddepartement;
		}
    public double getMoyenne() 
    {
    	return moyenne;
    	}
    public void setMoyenne(double moyenne)
    {
    	this.moyenne = moyenne;
    	}

	@Override
	public String toString() {
		return "Etudiants [IdE=" + numE + ", NomE=" + nomE + ", Niveau=" + niveau + ", DateE=" + dateEntree + ", st=" + idspecialite
				+ ", dt=" + iddepartement + ", moyenne=" + moyenne + "]";
	}
}

