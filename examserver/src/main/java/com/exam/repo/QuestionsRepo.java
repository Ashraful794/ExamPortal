package com.exam.repo;

import com.exam.model.Questions;
import com.exam.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface QuestionsRepo extends JpaRepository<Questions,Long> {
    Set<Questions> findByQuiz(Quiz quiz);

}
