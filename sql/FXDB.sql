select * from customer;

CREATE TABLE myschool_usermaster  
( user_name varchar2(50) NOT NULL,  
  user_id varchar2(50) NOT NULL,  
  email_id varchar2(50) NOT NULL, 
  mobile_no varchar2(50) NOT NULL,
  role_id varchar2(50) NOT NULL, 
  password varchar2(50) NOT NULL, 
  CONSTRAINT myschool_usermaster_pk PRIMARY KEY (user_id)  
);  