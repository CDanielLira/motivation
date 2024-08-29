import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  private audio: HTMLAudioElement | undefined;
  public audioStarted : boolean = false;
  public phrases : string [] = [
    '',
    'El que haga el examen al final es un plato de sopa',
    'Despues del examen debemos de ir por unas chaves',
    'Un pediente menos jaja',
    'Monty te manda un abrazo, dice que suerte en tu examen',
    'Relajateee, tranquilaaa',
    ''
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
