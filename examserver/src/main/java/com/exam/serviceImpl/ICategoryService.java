package com.exam.serviceImpl;

import com.exam.model.Category;
import com.exam.repo.CategoryRepo;
import com.exam.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class ICategoryService implements CategoryService {
    @Autowired
    CategoryRepo categoryRepo;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.categoryRepo.findAll());
    }

    @Override
    public Category getCategory(Long id) {
        return this.categoryRepo.findById(id).get();
    }

    @Override
    public void deleteCategory(Long id) {
        this.categoryRepo.deleteById(id);
    }
}
