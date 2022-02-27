package MySchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import MySchool.entity.*;

@Repository
public interface UsermasterRepository  extends JpaRepository<Usermaster, String> {

}
