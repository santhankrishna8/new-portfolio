import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  currentIndex = 0;
  experiences = [
    {
      title: 'Intern',
      image: 'assets/download.png',
      period: 'February - June 2023',
      location: 'Remote'
    },
    // Add more experiences as needed
  ];

  educations = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'SASTRA Deemed to be University',
      location: 'Thanjavur, Tamil Nadu',
      field: 'Electronics & Communication (ECE)',
      grade: 'CGPA: 7.4581'
    },{
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'SASTRA Deemed to be University',
      location: 'Thanjavur, Tamil Nadu',
      field: 'Electronics & Communication (ECE)',
      grade: 'CGPA: 7.4581'
    },{
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'SASTRA Deemed to be University',
      location: 'Thanjavur, Tamil Nadu',
      field: 'Electronics & Communication (ECE)',
      grade: 'CGPA: 7.4581'
    }
    // Add more educations as needed
  ];

  slide(direction: number) {
    const totalCards = this.experiences.length; // Adjust if you have different lengths
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = totalCards - 1;
    } else if (this.currentIndex >= totalCards) {
      this.currentIndex = 0;
    }

    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const cardWidth = sliderInner.children[0].clientWidth;
    sliderInner.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
  }
}
