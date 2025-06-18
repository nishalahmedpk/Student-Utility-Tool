import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cgpa } from './cgpa/cgpa';
import { Header } from './header/header';
import { Notes } from './notes/notes';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Cgpa,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Student-Utility-Tool';
}
