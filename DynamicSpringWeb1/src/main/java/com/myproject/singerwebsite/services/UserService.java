package com.myproject.singerwebsite.services;

import com.myproject.singerwebsite.models.RegisterRequest;
import com.myproject.singerwebsite.models.User;
import com.myproject.singerwebsite.models.Role;
import com.myproject.singerwebsite.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    public void registerUser(RegisterRequest registerRequest) {
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setPassword(registerRequest.getPassword());

        // Ստանում ենք դերը `RoleService`-ի միջոցով և այն նշանակենք օգտատիրոջը
        Role role = roleService.findByName("User"); // օրինակ՝ ստանում ենք "User" դերը
        newUser.setRole(role);

        userRepository.save(newUser);
    }
}
