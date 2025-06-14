import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Semester } from '../semester';



@Component({
  selector: 'app-cgpa',
  imports: [CommonModule, FormsModule],
  templateUrl: './cgpa.html',
  styleUrl: './cgpa.css'
})
export class Cgpa {

  gradePointMap: { [key: string]: number | null } = {
    'A': 10,
    'A-': 9,
    'B': 8,
    'B-': 7,
    'C': 6,
    'C-': 5,
    'D': 4,
    'E': 3,
    'F': null
  };


  cgpa() {
    let credits = 0;
    let grade = 0;
    for(let s of this.semesters) {
      for(let sub of s.subjects) {
        grade += sub.credits * (this.gradePointMap[sub.grade] ?? 0);
        if((this.gradePointMap[sub.grade] ?? 0)!=0) credits += sub.credits;
      }
    }     
    return grade/credits;
  }

  gpa(s: Semester) {
    let credits = 0;
    let grade = 0;
    for(let sub of s.subjects) {
      grade += sub.credits * (this.gradePointMap[sub.grade] ?? 0);
      if((this.gradePointMap[sub.grade] ?? 0)!=0) credits += sub.credits;
    }
    return grade/credits;
  }

  semesters: Semester[] = [
    {
      semName: 'Semester 1',
      subjects: [
        { name: 'Mathematics', credits: 4, grade: 'A' },
        { name: 'Physics', credits: 3, grade: 'B' },
        { name: 'Chemistry', credits: 3, grade: 'A-' }
      ]
    },
    {
      semName: 'Semester 2',
      subjects: [
        { name: 'Biology', credits: 3, grade: 'B' },
        { name: 'English', credits: 2, grade: 'A' },
        { name: 'Computer Science', credits: 4, grade: 'A-' }
      ]
    }
  ];
}
