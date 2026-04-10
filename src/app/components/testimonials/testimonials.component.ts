import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah & Michael Chen',
      role: 'Wedding — North Vancouver',
      quote: 'Our families in Hong Kong and Ontario were able to watch our entire ceremony live. They said it felt like they were right there with us. The stream quality was flawless and the team was so discreet — we barely noticed them.',
      stars: 5,
      initials: 'SC'
    },
    {
      name: 'The Kowalski Family',
      role: 'Memorial Service — Burnaby',
      quote: 'We had relatives across Canada and Poland who couldn\'t travel. Ivera Stream made it possible for everyone to say goodbye together. They were incredibly respectful and professional throughout a very difficult day.',
      stars: 5,
      initials: 'KF'
    },
    {
      name: 'Priya & Arjun Sharma',
      role: 'Wedding — Richmond',
      quote: 'We had 80 virtual guests from India watching live! The multi-camera setup was amazing — you could see everything from the ceremony to the first dance. The recording is something we\'ll cherish forever.',
      stars: 5,
      initials: 'PS'
    }
  ];

  stars(count: number): number[] {
    return Array(count).fill(0);
  }
}
