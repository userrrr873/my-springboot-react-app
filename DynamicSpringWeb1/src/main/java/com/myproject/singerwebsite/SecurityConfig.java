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
                .csrf(csrf -> csrf.disable())  // Անջատում ենք CSRF պաշտպանությունը
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/login", "/api/register").permitAll()  // Թույլատրվում են միայն մուտք գործելու և գրանցման էջերը
                        .anyRequest().authenticated())  // Այլ հարցումները պահանջում են վավերացում
                .formLogin() // Կառուցում ենք ձևով մուտք գործելու համակարգ
                .loginPage("/login") // Եթե ցանկանում եք մուտքի էջը ունենալ ձեր React-ում
                .permitAll(); // Թույլատրվում է բոլորին մուտք գործել այս էջի վրա

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
