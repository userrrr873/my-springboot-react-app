package com.myproject.singerwebsite.services;

import com.myproject.singerwebsite.models.Order;
import com.myproject.singerwebsite.repositories.OrderRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // @Autowired
    // private EmailService emailService;

    public Order saveOrder(Order order) {
        Order savedOrder = orderRepository.save(order);

        // Օրինակ՝ կարող եք հեռախոսահամարը ներառել նամակում
//        emailService.notifySingerAboutOrder(
//                "Անուն: " + order.getName() +
//                        "\nԷլ․ փոստ: " + order.getEmail() +
//                        "\nՀեռախոսահամար: " + order.getPhone() + // Նոր դաշտը ավելացրեք այստեղ
//                        "\nԵրգի մանրամասներ: " + order.getSongDetails()
//        );

        return savedOrder;
    }


    public void sendOrderNotification(String toEmail, Order order) throws MessagingException {
        // Մեյլի ուղարկումը անջատելու համար մեկնաբանի այս ֆունկցիան նույնպես
        // emailService.sendOrderNotification(
        //         toEmail,
        //         "Նոր երգի պատվեր",
        //         "Նոր պատվեր է ստացվել:" +
        //         "\nԱնուն: " + order.getName() +
        //         "\nԷլ․ փոստ: " + order.getEmail() +
        //         "\nԵրգի մանրամասներ: " + order.getSongDetails()
        // );
    }
}

