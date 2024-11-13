package com.myproject.singerwebsite.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name; // Օրինակ՝ "Owner", "Performer", "Moderator" և այլն

    public Role() {}

    public Role(String name) {
        this.name = name;
    }
}
