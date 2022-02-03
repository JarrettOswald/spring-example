package com.example.spring.blank_spring.repository;

import com.example.spring.blank_spring.model.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDTO, Long> {
}
