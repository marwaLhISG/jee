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

import com.example.td1.DAO.DepartementRepository;
import com.example.td1.Model.Departement;
import com.example.td1.Model.Etudiant;

@RestController
@RequestMapping(value="/departements")
public class DepartementController {
	
	@Autowired
	protected DepartementRepository DR;
	
	@PostMapping("/Add")
	public ResponseEntity<HttpStatus> ajouterE(@RequestBody Departement d)
	{
		DR.save(d);
		return ResponseEntity.ok(HttpStatus.OK);
	}
	
	@GetMapping("/GetAll")
	public List<Departement> afficherToutE()
	{
		return DR.findAll();
	}
	
	@GetMapping(value = "/GetByID/{id}")
	public Departement GetByID(@PathVariable long id) {
		return DR.getOne(id);
	}
	
	@PutMapping("/Update")
	public ResponseEntity<HttpStatus> Update(@RequestBody Departement d){
		Departement departement = DR.getOne(d.getIdDepartement());
		departement.setNomDepartement(d.getNomDepartement());
		DR.save(departement);
		return ResponseEntity.ok(HttpStatus.OK); 
	}

}
