import { Component, inject } from '@angular/core';
import { Notesservice } from '../notesservice';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note } from '../note';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-onenote',
  imports: [FormsModule,RouterModule],
  template: `
    <div class="onenote-container">
    <div class="toppp" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <input [(ngModel)]="thenote.notesTitle" placeholder="Title"/>
      <a [routerLink]="['/']" class="delete">x</a>
    </div>
    <div class="toolbar" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <button (click)="saveNote()">Save</button>
      <button (click)="deleteNote()">Delete</button>
      
    </div>

    
    
    <div class="texthingy">
      <textarea [(ngModel)]="thenote.notes" rows="10" cols="50"></textarea>
    </div>
    <p>Author: {{ thenote.author }}</p>
    </div>
  `,
  styleUrl: './onenote.css'
})
export class Onenote {
  id: number;
  thenote!: Note;
  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const foundNote = this.service.getNotesbyId(this.id);
    if (foundNote) {
      this.thenote = foundNote;
    } else {
      this.thenote = {
        notesTitle: 'New Note',
        author: 'Anonymous',
        notes: ''
      } as Note;
    }
  }
  service = inject(Notesservice);

  router = inject(Router);

  saveNote() {
    this.service.saveNote(this.thenote);
  }
  deleteNote() {
    this.service.deleteNote(this.id);
    this.router.navigate(['/']);
  }
}
