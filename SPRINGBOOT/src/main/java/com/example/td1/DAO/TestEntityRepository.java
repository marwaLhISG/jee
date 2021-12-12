package com.example.td1.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.td1.Model.TestEntity;

public interface TestEntityRepository extends JpaRepository <TestEntity, Long> {

	
}
