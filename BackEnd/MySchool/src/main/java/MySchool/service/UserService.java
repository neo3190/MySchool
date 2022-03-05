package MySchool.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MySchool.dto.UserDTO;
import MySchool.entity.Usermaster;
import MySchool.repository.UsermasterRepository;
import MySchool.util.UserUtil;

@Service
public class UserService {
	@Autowired
	UsermasterRepository userrepo;
	
	public List<UserDTO> findAll() {

		List<Usermaster> usermaster = userrepo.findAll();

		return UserUtil.getUserDto(usermaster);
	}
	
	public String userAuthentication(String userId,String password) {

		String role="NotAllowed";
		Optional<Usermaster> user= userrepo.findById(userId);
		List<Usermaster> usermaster=user.stream().collect(Collectors.toList());
		
        if(password.equals(usermaster.get(0).getPassword())) {
        	role=usermaster.get(0).getRole_id();
        }
        return role;
	}
	

}
