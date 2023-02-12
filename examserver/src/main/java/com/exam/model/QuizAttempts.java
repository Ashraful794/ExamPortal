package com.exam.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QuizAttempts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @Transient
    private Long userId;

    @ManyToOne
    private Quiz quiz;

    private Date date;

    private Double marks;

    private Integer questions_Attempts;

    private Integer correct_answer;

}
