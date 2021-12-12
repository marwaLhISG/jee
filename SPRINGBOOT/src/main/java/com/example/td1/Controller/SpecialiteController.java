package com.example.td1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.td1.Model.Departement;
import com.example.td1.Model.Etudiant;
import com.example.td1.Model.Specialite;
import com.example.td1.DAO.SpecialiteRepository;

@RestController
@RequestMapping(value="/specialite")
public class SpecialiteController {
	
    @Autowired
	protected SpecialiteRepository SR;
	
	@GetMapping(path="/GetAll")
	public List<Specialite> GetAll1()
	{
		return SR.findAll();
	}
	@PostMapping(path="/Add")
	public Specialite ajouterS(@RequestBody Specialite e)
	{
		return SR.save(e);
	}
	
	@GetMapping(value = "/GetByID/{id}")
	public Specialite GetByID(@PathVariable long id) {
		return SR.getOne(id);
	}
	
	@PutMapping("/Update")
	public ResponseEntity<HttpStatus> Update(@RequestBody Specialite s){
		Specialite specialite = SR.getOne(s.getIdSpecialite());
		specialite.setLibelleSpecialite(s.getLibelleSpecialite());
		return ResponseEntity.ok(HttpStatus.OK); 
	}
}
