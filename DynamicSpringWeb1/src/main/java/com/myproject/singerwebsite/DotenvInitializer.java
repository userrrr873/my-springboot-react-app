package com.myproject.singerwebsite;

import me.paulschwarz.springdotenv.DotenvApplicationInitializer;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;

public class DotenvInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
    @Override
    public void initialize(ConfigurableApplicationContext applicationContext) {
        new DotenvApplicationInitializer().initialize(applicationContext);
    }
}