package com.exam.repo;

import com.exam.model.QuizAttempts;
import com.exam.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizAttemptRepo extends JpaRepository<QuizAttempts,Long> {
    List<QuizAttempts> findByUser(User user);
}
