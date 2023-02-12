package com.exam.repo;

import com.exam.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface QuizRepo extends JpaRepository<Quiz,Long> {
    Set<Quiz> findByCategoryId(Long id);
    Set<Quiz> findByActive(boolean active);

    Set<Quiz> findByCategoryIdAndActive(Long id,Boolean active);
}
