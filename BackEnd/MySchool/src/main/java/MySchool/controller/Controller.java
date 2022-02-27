package MySchool.controller;
import java.util.HashMap;

import java.util.List;
import java.util.Map;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MySchool.entity.*;
import MySchool.repository.*;

@RestController
@RequestMapping("/")
public class Controller {
	 @Autowired
	    private UsermasterRepository usermasterRepository;
	 
	 @RequestMapping("/users")
	    public List < Usermaster > getAllUsers() {
	        return usermasterRepository.findAll();
	    }

}
