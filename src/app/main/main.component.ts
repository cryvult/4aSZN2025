import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-main',
  imports: [NgModel,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  inputText: string = ''; 
  displayedText: string = ''; 

  // Funkcja wywoływana po kliknięciu przycisku
  addText() {
    this.displayedText = this.inputText; 
    this.inputText = ''; 
  }
}
