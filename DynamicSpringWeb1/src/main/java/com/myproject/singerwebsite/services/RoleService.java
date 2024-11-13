package com.myproject.singerwebsite.services;

import com.myproject.singerwebsite.models.Role;
import com.myproject.singerwebsite.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role createRole(String roleName) {
        Optional<Role> role = roleRepository.findByName(roleName);
        return role.orElseGet(() -> roleRepository.save(new Role(roleName)));
    }

    public Role findByName(String roleName) {
        return roleRepository.findByName(roleName).orElse(null);
    }
}
