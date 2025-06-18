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

  addSubject(sem: Semester) {
    const index = this.semesters.indexOf(sem);
    if (index !== -1) {
      this.semesters[index].subjects.push({ name: '', credits: 0, grade: '' });
    }
  }

  removeSubject(sem: Semester, subject: { name: string, credits: number, grade: string }) {
    const index = this.semesters.indexOf(sem);
    const subjectIndex = this.semesters[index].subjects.indexOf(subject);
    if (index !== -1 && subjectIndex >= 0 && subjectIndex < this.semesters[index].subjects.length) {
      this.semesters[index].subjects.splice(subjectIndex, 1);
    }
  }

  addSemester() {
    this.semesters.push({ semName: `Semester ${this.semesters.length + 1}`, subjects: [] });
  }

  removeSemester(sem: Semester) {
    const index = this.semesters.indexOf(sem);
    if (index !== -1) {
      this.semesters.splice(index, 1);
    }
  }


  semesters: Semester[] = [
    {
      semName: 'Semester 1',
      subjects: [
        { name: '', credits: 0, grade: '' }
      ]
    }
  ];
}
