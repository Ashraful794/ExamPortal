package com.exam.serviceImpl;

import com.exam.model.Questions;
import com.exam.model.Quiz;
import com.exam.repo.QuestionsRepo;
import com.exam.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class IQuestionsService implements QuestionsService {

    @Autowired
    QuestionsRepo questionsRepo;

    @Override
    public Questions addQuestions(Questions questions) {
        return this.questionsRepo.save(questions);
    }

    @Override
    public Questions updateQuestions(Questions questions) {
        return this.questionsRepo.save(questions);
    }

    @Override
    public Set<Questions> getQuestions() {
        return new LinkedHashSet<>(this.questionsRepo.findAll());
    }

    @Override
    public Questions getQuestions(Long id) {
        return this.questionsRepo.findById(id).get();
    }


    @Override
    public Set<Questions> getQuestionsOfQuiz(Quiz quiz) {
        return this.questionsRepo.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(Long id) {
        this.questionsRepo.deleteById(id);
    }

    @Override
    public Questions updateQuestion(Questions questions) {
        return this.questionsRepo.save(questions);
    }
}
