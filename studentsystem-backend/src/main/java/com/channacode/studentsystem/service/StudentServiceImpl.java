package com.channacode.studentsystem.service;
import com.channacode.studentsystem.model.Student;
import com.channacode.studentsystem.repository.StudentReopsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentReopsitory studentReopsitory;

    @Override
    public Student saveStudent(Student student) {
        return studentReopsitory.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentReopsitory.findAll();
    }
}
