import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cgpa } from './cgpa/cgpa';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Cgpa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Student-Utility-Tool';
}
