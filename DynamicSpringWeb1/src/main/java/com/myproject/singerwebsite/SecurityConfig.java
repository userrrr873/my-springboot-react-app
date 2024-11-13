package com.myproject.singerwebsite;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/api/register").permitAll() // Գրանցումը և մուտքը հասանելի են բոլորին
                        .requestMatchers("/admin/**").hasAuthority("Owner") // Օրինակ՝ միայն Owner-ը կարող է հասնել /admin
                        .requestMatchers("/performer/**").hasAnyAuthority("Performer", "Owner") // Օրինակ՝ կայքի պարունակության կառավարումը հասանելի է Owner-ին և Performer-ին
                        .anyRequest().authenticated()) // Այլ հարցումները պահանջում են վավերացում
                .formLogin(login -> login
                        .loginPage("/login")
                        .permitAll());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
