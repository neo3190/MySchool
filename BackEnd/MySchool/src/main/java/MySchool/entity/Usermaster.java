package MySchool.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "myschool_usermaster")
public class Usermaster {

	
    private String user_name;
    private String user_id;
    private String email_id;
    private String mobile_no;
    private String role_id;
    private String password;
    
    public Usermaster()
    {
    	
    }

	public Usermaster(String user_name, String user_id, String email_id, String mobile_no, String role_id,
			String password) {
		super();
		this.user_name = user_name;
		this.user_id = user_id;
		this.email_id = email_id;
		this.mobile_no = mobile_no;
		this.role_id = role_id;
		this.password = password;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	 @Id
	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getRole_id() {
		return role_id;
	}

	public void setRole_id(String role_id) {
		this.role_id = role_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
    
}
