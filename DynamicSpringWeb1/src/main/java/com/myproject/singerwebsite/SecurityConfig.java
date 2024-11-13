package com.myproject.singerwebsite;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Անջատում է CSRF պաշտպանությունը
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/api/register").permitAll()  // Թույլատրվում են միայն մուտքի և գրանցման էջերը
                        .anyRequest().authenticated())  // Այլ հարցումները պահանջում են վավերացում
                .formLogin(login -> login
                        .loginPage("/login") // Ցանկության դեպքում նշեք React-ի մուտքագրման էջը
                        .permitAll()); // Թույլատրում է մուտքի էջին հասանելիություն բոլորին

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
