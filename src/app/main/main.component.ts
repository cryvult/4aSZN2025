import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  inputText: string = '';
  texts: { id: number, content: string, isEditing: boolean }[] = [];
  nextId: number = 0;
  
  addText() {
    if (this.inputText.trim()) {
      this.texts.push({ id: this.nextId++, content: this.inputText.trim(), isEditing: false });
      this.inputText = '';
    }
  }
  
  removeText(id: number) {
    this.texts = this.texts.filter(text => text.id !== id);
  }
  
  editText(id: number) {
    this.texts = this.texts.map(text => ({
      ...text,
      isEditing: text.id === id
    }));
  }
  
  saveEdit(id: number, newValue: string) {
    this.texts = this.texts.map(text =>
      text.id === id ? { ...text, content: newValue.trim(), isEditing: false } : text
    );
  }
  
  
}
