package com.myproject.singerwebsite.controllers;

import com.myproject.singerwebsite.models.Order;
import com.myproject.singerwebsite.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@CrossOrigin(origins = "http://localhost:3000") // փոխարինեք frontend-ի հասցեով
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public String createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.saveOrder(order);
        try {
            orderService.sendOrderNotification("raf.gasparyan.15@icloud.com", savedOrder); // փոխարինեք ձեր էլ․ հասցեով
        } catch (MessagingException e) {
            return "Պատվերը պահպանվել է, բայց նամակն անհաջող է ուղարկվել";
        }
        return "Պատվերը հաջողությամբ ստեղծվել է և նամակը ուղարկվել է";
    }
}
