package com.example.td1.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.td1.Model.Cours;
import com.example.td1.metier.CoursMetier;
@RestController
@RequestMapping(value="/Cours")
public class CoursController{
	@Autowired
	private CoursMetier coursMetier;
	
	@GetMapping(value="/findCours/{id}")
	public Optional<Cours> findCours(@PathVariable (value="id") String id){
	return coursMetier.findCours(Long.parseLong(id));
}
	@PostMapping("/cours")
	public Cours creeCours(@RequestBody Cours co)
	{
		coursMetier.saveCours(co);
		return co;
	}
	@PutMapping("/Update")
	public String UpdateCours(@PathVariable @RequestBody Cours co)
	{
		coursMetier.saveCours(co);

	return"success:Update a ete bien faite";
	}

	@GetMapping("/getAllCours")
	public List<Cours> getAllCours(){
		return coursMetier.ListCours();
	}
	
	

	@DeleteMapping(value="/delete cours/{id}")
	public String deleteCours(@PathVariable String id)
	{
		coursMetier.removeCours(Long.parseLong(id));
		return "ok!";
	}
}



