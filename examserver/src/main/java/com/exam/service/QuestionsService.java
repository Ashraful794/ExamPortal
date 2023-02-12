package com.exam.service;

import com.exam.model.Questions;
import com.exam.model.Quiz;

import java.util.Set;

public interface QuestionsService {

    Questions addQuestions(Questions questions);
    Questions updateQuestions(Questions questions);
    Set<Questions> getQuestions();
    Questions getQuestions(Long id);
    Set<Questions> getQuestionsOfQuiz(Quiz quiz);
    void deleteQuestion(Long id);
    Questions updateQuestion(Questions questions);
}
