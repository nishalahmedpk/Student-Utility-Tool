import { Component } from '@angular/core';
import { Note } from '../note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [CommonModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  notesarr: Note[] = [
    {
      notesTitle: 'Angular Basics',
      author: 'John Doe',
      notes: `Introduction to Angular components, modules, and services. 
      Angular is a platform for building mobile and desktop web applications. 
      Components are the basic building blocks of Angular applications. 
      Modules help organize an application into cohesive blocks of functionality. 
      Services are used to share data and logic across components. 
      Angular uses dependency injection to provide services to components. 
      Understanding the component lifecycle and data binding is essential for building robust Angular apps.`
    },
    {
      notesTitle: 'TypeScript Tips',
      author: 'Jane Smith',
      notes: `Useful TypeScript features like interfaces, generics, and type inference. 
      Interfaces define contracts for objects, making code more maintainable. 
      Generics allow you to write flexible, reusable functions and classes. 
      Type inference lets TypeScript automatically determine variable types, reducing the need for explicit annotations. 
      Enums provide a way to define named constants. 
      Type aliases and union types help create expressive type definitions. 
      Advanced features like mapped types and conditional types enable powerful type manipulations.`
    },
    {
      notesTitle: 'RxJS Observables',
      author: 'Alice Johnson',
      notes: `Understanding observables, operators, and subscriptions in RxJS. 
      Observables represent streams of data that can be observed over time. 
      Operators like map, filter, and mergeMap allow you to transform and combine streams. 
      Subscriptions are used to start listening to observable streams and handle emitted values. 
      Subjects act as both observers and observables, enabling multicasting. 
      Error handling and cleanup are important aspects of working with observables. 
      Mastering RxJS is key to managing asynchronous data in Angular applications.`
    }
  ];
}
