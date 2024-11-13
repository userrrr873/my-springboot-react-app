package com.myproject.singerwebsite.repositories;

import com.myproject.singerwebsite.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name); // Ավելացնում ենք այս տողը
}
