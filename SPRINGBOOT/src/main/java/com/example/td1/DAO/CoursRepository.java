package com.example.td1.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import com.example.td1.Model.Cours;

@RepositoryRestResource
public interface CoursRepository extends JpaRepository <Cours, Long>{
	
	
}
