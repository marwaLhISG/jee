package com.example.td1.metier;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.td1.DAO.CoursRepository;
import com.example.td1.Model.Cours;

@Service
public class CoursService implements CoursMetier {

	@Autowired
	protected CoursRepository repository;
	@Override
	public Optional<Cours> findCours(long parseLong) {
		return repository.findById(parseLong);
		
	}

	@Override
	public void saveCours(Cours co) {
		repository.save(co);
	}

	@Override
	public List<Cours> ListCours() {
		return repository.findAll();
	}

	@Override
	public void removeCours(long parseLong) {
		repository.deleteById(parseLong);
	}

}
