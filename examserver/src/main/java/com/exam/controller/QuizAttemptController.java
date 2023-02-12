package com.exam.controller;

import com.exam.model.QuizAttempts;
import com.exam.model.User;
import com.exam.service.QuizAttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@RestController
@RequestMapping("/quizattempt")
@CrossOrigin("http://localhost:4200")
public class QuizAttemptController {
    @Autowired
    QuizAttemptService quizAttemptService;

    @PostMapping()
    public ResponseEntity addQuizAttempt(@RequestBody QuizAttempts quizAttempts)
    {

        User user=new User();
        user.setId(quizAttempts.getUserId());

        quizAttempts.setUser(user);

        quizAttempts.setDate(new Date());

        return ResponseEntity.ok(quizAttemptService.addQuizAttempts(quizAttempts));
    }

    @GetMapping()
    public ResponseEntity getQuizAttempt()
    {
        return ResponseEntity.ok(quizAttemptService.getQuizAttempts());
    }

    @GetMapping("/{id}")
    public ResponseEntity getQuizAttempt(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.quizAttemptService.getQuizAttempts(id));
    }


    @GetMapping("/user/{id}")
    public ResponseEntity getQuizAttemptByUser(@PathVariable Long id)
    {
        User user=new User();
        user.setId(id);
        return ResponseEntity.ok(this.quizAttemptService.getQuizAttemptsByUser(user));
    }
}
