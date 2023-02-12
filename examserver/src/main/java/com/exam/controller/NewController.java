package com.exam.controller;

import com.exam.model.Category;
import com.exam.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("http://localhost:4200")
public class NewController {

    @Autowired
    CategoryService categoryService;

    @PostMapping()
    public ResponseEntity addCategory(@RequestBody Category category)
    {
        return ResponseEntity.ok(this.categoryService.addCategory(category));
    }

    @GetMapping()
    public ResponseEntity getCategory()
    {
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity getCategory(@PathVariable Long id)
    {
        return ResponseEntity.ok(this.categoryService.getCategory(id));
    }
    @PutMapping()
    public ResponseEntity updateCategory(@RequestBody Category category)
    {
        return ResponseEntity.ok(this.categoryService.updateCategory(category));
    }
    @DeleteMapping("/id")
    public void deleteCategory(@PathVariable Long id)
    {
        this.categoryService.deleteCategory(id);
    }

}
