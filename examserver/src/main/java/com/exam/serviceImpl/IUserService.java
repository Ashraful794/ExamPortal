package com.exam.serviceImpl;

import com.exam.model.JwtRequest;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repo.RoleRepo;
import com.exam.repo.UserRepo;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class IUserService implements UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    RoleRepo roleRepo;

    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User local=this.userRepo.findByUsername(user.getUsername());

        if(local!=null)
        {
            throw new Exception("User Name All ready Exits");
        }
        else
        {
            for (UserRole ur:userRoles)
            {
                roleRepo.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local=this.userRepo.save(user);
        }

        return local;
    }

    @Override
    public User getUser(String userName) {
        return this.userRepo.findByUsername(userName);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepo.deleteById(userId);
    }

    @Override
    public User login(JwtRequest jwtRequest) throws Exception {
        User user=userRepo.findByUsername(jwtRequest.getUsername());

        if (user==null)
        {
            throw new Exception("User Not Found");
        }

        String pa=jwtRequest.getPassword();
        String pass=user.getPassword();


        if(!passwordEncoder.matches(jwtRequest.getPassword(), user.getPassword()))
        {
            throw new Exception("Password Doesn't Match");
        }

        return user;

    }
}
