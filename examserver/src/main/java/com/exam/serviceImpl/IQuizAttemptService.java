package com.exam.serviceImpl;

import com.exam.model.Quiz;
import com.exam.model.QuizAttempts;
import com.exam.model.User;
import com.exam.repo.QuizAttemptRepo;
import com.exam.service.QuizAttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Service
public class IQuizAttemptService implements QuizAttemptService {
    @Autowired
    QuizAttemptRepo quizAttemptRepo;
    @Override
    public QuizAttempts addQuizAttempts(QuizAttempts quizAttempts) {
        return this.quizAttemptRepo.save(quizAttempts);
    }

    @Override
    public Set<QuizAttempts> getQuizAttempts() {
        return new LinkedHashSet<> (this.quizAttemptRepo.findAll());
    }

    @Override
    public QuizAttempts getQuizAttempts(Long id) {
        return this.quizAttemptRepo.findById(id).get();
    }

    @Override
    public List<QuizAttempts> getQuizAttemptsByUser(User user) {
        return this.quizAttemptRepo.findByUser(user);
    }
}
