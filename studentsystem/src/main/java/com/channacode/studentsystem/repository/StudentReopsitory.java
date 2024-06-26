package com.channacode.studentsystem.repository;

import com.channacode.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentReopsitory extends JpaRepository<Student, Integer> {
}
