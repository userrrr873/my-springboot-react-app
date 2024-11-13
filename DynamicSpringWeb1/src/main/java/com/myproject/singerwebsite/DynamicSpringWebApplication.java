package com.myproject.singerwebsite;

import me.paulschwarz.springdotenv.DotenvApplicationInitializer;
import me.paulschwarz.springdotenv.DotenvConfig;
import me.paulschwarz.springdotenv.DotenvPropertyLoader;
import me.paulschwarz.springdotenv.DotenvPropertySource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class DynamicSpringWebApplication {
//    @Autowired
//    private EmailSenderService senderService;

    public static void main(String[] args) {
        new SpringApplicationBuilder(DynamicSpringWebApplication.class)
                .initializers(new DotenvApplicationInitializer())
                .run(args);


//    @EventListener(ApplicationReadyEvent.class)
//    public void sendMail(){
//        senderService.sendEmail("raf.gasparyan.15@icloud.com",
//                "This is Subject",
//                "This is Body of Email");
    }
}
