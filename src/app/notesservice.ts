import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class Notesservice {

  constructor() { }

  getNotes() {
    return this.notesarr;
  }


  getNotesbyId(id: number): Note | undefined {
    return this.notesarr.find(note => note.id === id);
  }

  saveNote(note: Note): void {
    const existingNoteIndex = this.notesarr.findIndex(n => n.id === note.id);
    if (existingNoteIndex !== -1) {
      this.notesarr[existingNoteIndex] = note; // Update existing note
    } else {
      let newId: number;
      do {
        newId = Math.floor(Math.random() * 1000000);
      } while (this.notesarr.some(n => n.id === newId));
      note.id = newId; // Assign unique random ID
      this.notesarr.push(note); // Add new note
    }
  }

  deleteNote(id: number): void {
    this.notesarr = this.notesarr.filter(note => note.id !== id);
  }

  notesarr: Note[] = [
    {
      id: 1,
      notesTitle: 'Why me?',
      author: 'Nishal Ahmed',
      notes: `I am eager to join the Microsoft Tech Club as a Technical Executive because of my strong passion for technology and my proven experience in software development. My background in Angular, TypeScript, and modern web technologies equips me to contribute meaningfully to the club's technical initiatives. I have demonstrated leadership in collaborative projects, and I am committed to fostering a culture of learning and innovation.

      As a Technical Executive, I will leverage my skills to organize workshops, mentor peers, and drive technical excellence within the club. I am enthusiastic about sharing knowledge, exploring Microsoft technologies, and helping others grow. My dedication, technical expertise, and teamwork make me a strong candidate for this role. I am excited about the opportunity to make a positive impact and help the club achieve its goals.`
    }
  ];
  
}
