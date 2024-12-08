package com.myproject.singerwebsite.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @Column(unique = true)
    private String email;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role; // Պաշտոնի կապը
}
