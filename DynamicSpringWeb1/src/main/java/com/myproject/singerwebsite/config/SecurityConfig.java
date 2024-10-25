package com.myproject.singerwebsite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((requests) -> requests
                        .anyRequest().authenticated() // պահանջում է նույնականացում ցանկացած հարցման համար
                )
                .formLogin((form) -> form
                        .loginPage("/login") // սա չի պարտադիր, եթե չես ուզում custom login էջ
                        .permitAll()
                )
                .logout((logout) -> logout.permitAll());

        return http.build();
    }

    // Օգտատիրոջ տվյալների կառավարում (InMemory)
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("root")
                .password("admin")
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }
}
