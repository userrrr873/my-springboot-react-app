package com.myproject.singerwebsite.repositories;

import com.myproject.singerwebsite.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);  // Ստեղծում ենք հարցում email-ի հիման վրա
    Optional<User> findByEmail(String email); // Ավելացնել այս տողը
}

