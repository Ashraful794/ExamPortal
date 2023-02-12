package com.exam.service;

import com.exam.model.Quiz;
import com.exam.model.QuizAttempts;
import com.exam.model.User;

import java.util.List;
import java.util.Set;

public interface QuizAttemptService {

    QuizAttempts addQuizAttempts(QuizAttempts quizAttempts);
    Set<QuizAttempts> getQuizAttempts();
    QuizAttempts getQuizAttempts(Long id);

    List<QuizAttempts> getQuizAttemptsByUser(User user);
}
