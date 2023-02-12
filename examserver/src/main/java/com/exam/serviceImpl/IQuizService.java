package com.exam.serviceImpl;

import com.exam.model.Quiz;
import com.exam.repo.QuizRepo;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class IQuizService implements QuizService {

    @Autowired
    QuizRepo quizRepo;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Set<Quiz> getQuiz() {
        return new LinkedHashSet<>(this.quizRepo.findAll());
    }

    @Override
    public Quiz getQuiz(Long id) {
        return this.quizRepo.findById(id).get();
    }

    @Override
    public void deleteQuiz(Long id) {
        this.quizRepo.deleteById(id);
    }

    @Override
    public Set<Quiz> findByCategoryId(Long id) {
        return this.quizRepo.findByCategoryId(id);
    }

    @Override
    public Set<Quiz> findByActive(Boolean active) {
        return this.quizRepo.findByActive(active);
    }

    @Override
    public Set<Quiz> findByCategoryAndActive(Long id, Boolean active) {
        return this.quizRepo.findByCategoryIdAndActive(id,active);
    }
}
