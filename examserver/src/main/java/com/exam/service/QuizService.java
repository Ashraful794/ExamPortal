package com.exam.service;

import com.exam.model.Category;
import com.exam.model.Quiz;

import java.util.Set;

public interface QuizService {
    Quiz addQuiz(Quiz quiz);
    Quiz updateQuiz(Quiz quiz);
    Set<Quiz> getQuiz();
    Quiz getQuiz(Long id);
    void deleteQuiz(Long id);
    Set<Quiz> findByCategoryId(Long id);
    Set<Quiz> findByActive(Boolean active);
    Set<Quiz> findByCategoryAndActive(Long id,Boolean active);

}
