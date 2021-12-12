package com.example.td1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.td1.DAO.EtudiantRepository;
import com.example.td1.Model.Departement;
import com.example.td1.Model.Etudiant;

@RestController
@RequestMapping(value="/etudiants")

public class EtudiantController

{
	
	@Autowired
	protected EtudiantRepository repository;
	
	@PostMapping("/Add")
	public Etudiant AddEtudiant(@RequestBody Etudiant e)
	{
		return repository.save(e);
	}
	
	@GetMapping("/GetAll")
	public List<Etudiant> GetAll()
	{
		return repository.findAll();
	}
	
	@GetMapping(value = "/GetByID/{id}")
	public Etudiant GetByID(@PathVariable long id) {
		return repository.getOne(id);
	}
	
	@PutMapping(path = "/Update")
	public ResponseEntity<HttpStatus> Update(@RequestBody Etudiant etudiant){
		try {
			Etudiant et = repository.getOne(etudiant.getNumE());
			if(et == null) 
				{return ResponseEntity.notFound().build();}
			else {
				et.setDateEntree(etudiant.getDateEntree());
				et.setMoyenne(etudiant.getMoyenne());
				et.setNiveau(etudiant.getNiveau());
				et.setNomE(etudiant.getNomE());
			}
			repository.save(et);
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
		
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@DeleteMapping("/Delete/{id}")
	public ResponseEntity<HttpStatus> Delete(@PathVariable long id){
		repository.deleteById(id);
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@GetMapping("/Q8")
	public List<Departement> question81()
	{
		return repository.parametreQ81(repository.parametreQ82().get(0));
	}


	
	@GetMapping("/Q11")
	public List<Departement> question11()
	{
		return repository.parametreQ81(repository.parametreQ11().get(0));
	}

	@GetMapping("/Q12")
	public List<Departement> question12()
	{
		return repository.parametreQ81 (Long.valueOf(0));
	}

	
}
