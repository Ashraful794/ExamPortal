package com.exam.controller;

import com.exam.model.Questions;
import com.exam.model.Quiz;
import com.exam.service.QuestionsService;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/quesstions")
@CrossOrigin("http://localhost:4200")

public class QuestionsController {
    @Autowired
    QuestionsService questionsService;

    @Autowired
    QuizService quizService;


    @PostMapping()
    public ResponseEntity postQuestions(@RequestBody Questions questions)
    {
        return ResponseEntity.ok(this.questionsService.addQuestions(questions));
    }
    @GetMapping()
    public ResponseEntity getQuestions()
    {
        return ResponseEntity.ok(this.questionsService.getQuestions());
    }
    @GetMapping("/{id}")
    public ResponseEntity getQuestions(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.questionsService.getQuestions(id));
    }

    @GetMapping("/quiz/{id}")
    public ResponseEntity getQuestionsOfQuiz(@PathVariable Long id)
    {
        Quiz quiz=this.quizService.getQuiz(id);

        Set<Questions> questions=quiz.getQuestions();



        List<Questions> list=new ArrayList(questions);

        if (list.size() > Integer.parseInt(quiz.getNumberOfQuestions()))
        {
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
        Collections.shuffle(list);

        list.forEach((q)->{
            q.setAnswer("");
        });

        return ResponseEntity.ok(list);
    }

    @GetMapping("/quiz/all/{id}")
    public ResponseEntity getQuestionsOfQuizAdmin(@PathVariable Long id)
    {
        Quiz quiz=new Quiz();
        quiz.setId(id);
        return ResponseEntity.ok(this.questionsService.getQuestionsOfQuiz(quiz));
    }
    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id)
    {
        this.questionsService.deleteQuestion(id);
    }

    @PutMapping("")
    public ResponseEntity updateQuestion(@RequestBody Questions questions)
    {
        return ResponseEntity.ok(this.questionsService.updateQuestion(questions));
    }

    @PostMapping("/submitQuestion")
    public ResponseEntity submitQuiz(@RequestBody List<Questions> questions)
    {
        Integer correctAnswer= 0;
        Double marksGot=0.0;
        Integer attempted= 0;

        Double singleQuestionMarks=Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();

        for (Questions q:questions)
        {
            Questions q1=this.questionsService.getQuestions(q.getId());

            if(q.getGivenAnswer().equals(q1.getAnswer()))
            {
                correctAnswer++;
                marksGot+=singleQuestionMarks;
            }
            if(q.getGivenAnswer().trim()!="")
            {
                attempted++;
            }

        }
        Map<String,Object> response=Map.of("MarksGot",marksGot, "CorrectAnswer",correctAnswer,"AteemtQuestion",attempted);
        return ResponseEntity.ok(response);
    }

}
