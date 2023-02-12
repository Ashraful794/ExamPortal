package com.exam.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String maxMarks;
    private String numberOfQuestions;
    private boolean active=false;
    @ManyToOne()
    private Category category;

    @OneToMany(mappedBy = "quiz")
    @JsonIgnore
    private Set<Questions> questions=new HashSet<>();

    @OneToMany(mappedBy = "quiz")
    @JsonIgnore
    private List<QuizAttempts> quizAttempts;
}
