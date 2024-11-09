package com.myproject.singerwebsite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String email;

    // Ավելացնենք դերը (role) և նվերը (gift)
    private String role;  // Օգտատիրոջ դերը՝ օրինակ՝ User, Fan Club Member, Moderator և այլն
    private String gift;  // Նվեր, եթե կիրառվում է պրոմոկոդը
}
