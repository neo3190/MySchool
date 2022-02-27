package MySchool.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import MySchool.dto.UserDTO;
import MySchool.entity.Usermaster;



public class UserUtil {

	public static List<UserDTO> getUserDto(List<Usermaster> userMasters) {
		
		List<UserDTO> usersDTO=new ArrayList<UserDTO>();
		
		for (Usermaster users : userMasters) {
					
			if(Objects.nonNull(users)) {
				UserDTO userDTO=new UserDTO();
								
				userDTO.setEmail_id(users.getEmail_id());
				userDTO.setUser_id(users.getUser_id());
				userDTO.setUser_name(users.getUser_name());
				userDTO.setMobile_no(users.getMobile_no());
				userDTO.setPassword(users.getPassword());
				userDTO.setRole_id(users.getRole_id());
				
				usersDTO.add(userDTO);
			
			}
			else {
				System.out.println("null db object");
			} 
           
        }
		
				return usersDTO;
	}
	
}
