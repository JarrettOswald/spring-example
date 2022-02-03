package com.example.spring.blank_spring.controllers;

import com.example.spring.blank_spring.model.UserDTO;
import com.example.spring.blank_spring.repository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newuser")
public class ControllerApp {

    private static final Logger logger = LogManager.getLogger(ControllerApp.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping()
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO user) {
        logger.info(user);
        userRepository.save(user);
        return ResponseEntity.ok().body(user);
    }
}
