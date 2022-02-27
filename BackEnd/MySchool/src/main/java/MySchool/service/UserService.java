package MySchool.service;

import java.util.List;

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
	

}
