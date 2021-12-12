package com.example.td1.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.td1.Model.TestEntity;
import com.example.td1.DAO.TestEntityRepository;

@RestController
@RequestMapping(value="/testentitys")
public class TestEntityController {
	
	@Autowired
	private TestEntityRepository TE;
	
	@GetMapping("/GetAll")
	public List<TestEntity> GetAll(){
		return TE.findAll();
	}
	@PostMapping("/Add")
	public TestEntity Add(@RequestBody TestEntity te) {
		return TE.save(te);
	}
}
