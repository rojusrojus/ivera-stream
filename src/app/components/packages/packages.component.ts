import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Package {
  name: string;
  price: number;
  priceSuffix?: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  activeTab: 'wedding' | 'funeral' = 'wedding';

  wedding: Package[] = [
    {
      name: 'Essential',
      price: 750,
      tagline: 'Perfect for intimate ceremonies',
      highlighted: false,
      features: [
        '1 professional camera',
        'Private stream link',
        'Up to 2 hours coverage',
        'HD 1080p broadcast',
        'Live switching operator',
        'Stream recording included',
      ]
    },
    {
      name: 'Premium',
      price: 1600,
      tagline: 'Our most popular package',
      highlighted: true,
      features: [
        '2 professional cameras',
        'Private stream link',
        'Up to 3 hours coverage',
        'HD 1080p broadcast',
        'Live switching operator',
        'Stream recording included',
        'Professional audio capture',
        'Pre-stream guest waiting room',
      ]
    },
    {
      name: 'Elite',
      price: 2500,
      priceSuffix: '+',
      tagline: 'Full-day premium experience',
      highlighted: false,
      features: [
        '3 professional cameras',
        'Private stream link',
        'Up to 4 hours coverage',
        'HD 1080p broadcast',
        'Live switching operator',
        'Stream recording included',
        'Professional audio capture',
        'Pre-stream guest waiting room',
        'Social media highlight clip',
        'Dedicated technical support',
      ]
    }
  ];

  funeral: Package[] = [
    {
      name: 'Essential',
      price: 600,
      tagline: 'Respectful & straightforward',
      highlighted: false,
      features: [
        '1 professional camera',
        'Private, family-only link',
        'Up to 2 hours coverage',
        'HD 1080p broadcast',
        'Discreet setup & operation',
        'Stream recording included',
      ]
    },
    {
      name: 'Premium',
      price: 1200,
      tagline: 'Most chosen by families',
      highlighted: true,
      features: [
        '2 professional cameras',
        'Private, family-only link',
        'Up to 3 hours coverage',
        'HD 1080p broadcast',
        'Discreet setup & operation',
        'Stream recording included',
        'Professional audio capture',
        'Pre-stream holding screen',
      ]
    },
    {
      name: 'Elite',
      price: 1800,
      tagline: 'Complete memorial coverage',
      highlighted: false,
      features: [
        '3 professional cameras',
        'Private, family-only link',
        'Up to 4 hours coverage',
        'HD 1080p broadcast',
        'Discreet setup & operation',
        'Stream recording included',
        'Professional audio capture',
        'Pre-stream holding screen',
        'Photo slideshow intro',
        'Same-week booking priority',
      ]
    }
  ];

  get activePackages(): Package[] {
    return this.activeTab === 'wedding' ? this.wedding : this.funeral;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
