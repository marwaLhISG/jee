package com.example.td1.metier;

import java.util.List;
import java.util.Optional;

import com.example.td1.Model.Cours;

public interface CoursMetier {

	Optional<Cours> findCours(long parseLong);

	void saveCours(Cours co);

	List<Cours> ListCours();

	void removeCours(long parseLong);

}
