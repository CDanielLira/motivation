import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Edith Motivation';
  private audio: HTMLAudioElement | undefined;
  public audioStarted : boolean = false;
  public phrases : string [] = [
    '',
    'El que haga el examen al final es un plato de sopa',
    'Despues del examen debemos de ir por unas chaves',
    'Un pediente menos jaja',
    'Monty te manda un abrazo, dice que suerte en tu examen',
    'Relajateee, tranquilaaa',
  ]
  public phrase !: string;

  constructor() {
    
    
  }

  ngOnInit(): void {
    this.phrase = this.phrases[this.getRandomInt(this.phrases.length, 0)];
    
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  playSound(): void {
    if (!this.audio) {
      this.audio = new Audio('assets/sound.mp3');
      this.audio.addEventListener('ended', () => {
        this.audioStarted = false;
      });
    }
    this.audio.play();
    this.audioStarted = true;
  }

  stopSound(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Opcional: Reinicia el audio al principio
      this.audioStarted = false;
    }
  }
}
