package com.exam.controller;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/registration")
    public User createUser(@RequestBody User user) throws Exception
    {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setProfile("default.png");
        Set<UserRole> roles=new HashSet<>();
        Role role=new Role();


        role.setRoleId(45L);
        role.setRoleName("Normal");

        UserRole userRole=new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);

        return this.userService.createUser(user,roles);
    }

    @GetMapping("/{userName}")
    public User getUser(@PathVariable String userName)
    {
        return this.userService.getUser(userName);
    }


    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId)
    {
        this.userService.deleteUser(userId);
    }
}
