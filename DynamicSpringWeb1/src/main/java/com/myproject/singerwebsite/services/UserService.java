package com.myproject.singerwebsite.services;

import com.myproject.singerwebsite.models.RegisterRequest;
import com.myproject.singerwebsite.models.User;
import com.myproject.singerwebsite.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Օգտատիրոջ գրանցումը՝ RegisterRequest օգտագործելով
    public void registerUser(RegisterRequest registerRequest) {
        // Ստեղծում ենք նոր User օբյեկտ
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setPassword(registerRequest.getPassword());

        // Այստեղ կարելի է ավելացնել logic՝ FanClub-ին միանալու համար
        if (registerRequest.isJoinFanClub()) {
            // Դրանք կարող են լինել ձեր կողմից սահմանած այլ դաշտեր
        }

        // Պահպանում ենք նոր User-ը տվյալների բազայում
        userRepository.save(newUser);
    }

    // Այլ մեթոդներ...
}
