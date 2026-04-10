import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  videos = [
    'https://assets.mixkit.co/videos/40627/40627-1080.mp4',  // bride & groom in garden
    'https://assets.mixkit.co/videos/5217/5217-1080.mp4',    // wedding ceremony
    'https://assets.mixkit.co/videos/40591/40591-1080.mp4',  // happy bride walking
    'https://assets.mixkit.co/videos/40601/40601-1080.mp4',  // newlyweds posing
    'https://assets.mixkit.co/videos/40593/40593-1080.mp4',  // newlyweds smiling
  ];

  activeIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.videos.length;
    }, 7000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
