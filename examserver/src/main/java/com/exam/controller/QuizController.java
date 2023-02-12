package com.exam.controller;


import com.exam.model.Quiz;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("http://localhost:4200")
public class QuizController {
    @Autowired
    QuizService quizService;

    @PostMapping()
    public ResponseEntity addQuiz(@RequestBody Quiz quiz)
    {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @GetMapping()
    public ResponseEntity getQuiz()
    {
        return ResponseEntity.ok(this.quizService.getQuiz());
    }
    @GetMapping("{id}")
    public ResponseEntity getQuiz(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.quizService.getQuiz(id));
    }
    @PutMapping()
    public ResponseEntity updateQuiz(@RequestBody Quiz quiz)
    {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    @DeleteMapping("{id}")
    public void deleteQuiz(@PathVariable Long id)
    {
        this.quizService.deleteQuiz(id);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity getQuizByCategory(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.quizService.findByCategoryId(id));
    }
    @GetMapping("/active")
    public ResponseEntity getActiveQuiz()
    {
        return ResponseEntity.ok(this.quizService.findByActive(true));
    }


    @GetMapping("/category/{id}/active")
    public ResponseEntity getQuizByCategoryAndActive(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.quizService.findByCategoryAndActive(id,true));
    }
}
