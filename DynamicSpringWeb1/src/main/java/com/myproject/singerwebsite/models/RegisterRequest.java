package com.myproject.singerwebsite.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private boolean joinFanClub;
    private String promoCode;
}
