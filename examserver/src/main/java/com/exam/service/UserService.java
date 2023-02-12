package com.exam.service;

import com.exam.model.JwtRequest;
import com.exam.model.User;
import com.exam.model.UserRole;

import java.util.Set;

public interface UserService {

    User createUser(User user, Set<UserRole> userRoles) throws Exception;

    User getUser(String userName);

    void deleteUser(Long userId);

    User login(JwtRequest jwtRequest) throws Exception;
}
