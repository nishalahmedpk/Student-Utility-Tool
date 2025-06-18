import { Component, inject } from '@angular/core';
import { Note } from '../note';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Notesservice } from '../notesservice';



@Component({
  selector: 'app-notes',
  imports: [CommonModule, RouterModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  note = inject(Notesservice)
  notesarr: Note[] = this.note.getNotes();
}
