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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import MySchool.dto.UserDTO;
import MySchool.entity.*;
import MySchool.repository.*;
import MySchool.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200")
public class Controller {
	 @Autowired
	    private UserService userService;
	 
	 @RequestMapping("/users")
	    public List < UserDTO > getAllUsers() {
	        return userService.findAll();
	    }

	 
	 @GetMapping("/userAuthentication")
	 @ResponseBody
	    public String userAuthentication(@RequestParam List<String> usercredential) {
		 String role="NotAllowed";
		 String userId="";
		 String password="";
		 
		 userId=usercredential.get(0);
		 password=usercredential.get(1);
		 role= userService.userAuthentication(userId, password);
		 				 
	        return role;
	    }
}
