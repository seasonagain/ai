package com.ai.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class BackendApplicationTests {

    @Test
    void contextLoads() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("aaa"));
        System.out.println(passwordEncoder.encode("aaa"));
        System.out.println(passwordEncoder.encode("aaa"));
        System.out.println(passwordEncoder.matches("aaa","$2a$10$Z7X1pivAkPYig2T.SJLUYOtuScZSlCjZR.LTMWCrXS9kM3/JO5lh."));
    }

}
