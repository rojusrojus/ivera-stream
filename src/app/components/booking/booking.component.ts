import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PackageOption {
  id: string;
  label: string;
  price: number;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  eventType: 'wedding' | 'funeral' = 'wedding';
  selectedPackage = 'Essential';
  name = '';
  email = '';
  phone = '';
  eventDate = '';
  venue = '';
  guestCount: number | null = null;
  message = '';

  submitting = false;
  success = false;

  weddingPackages: PackageOption[] = [
    { id: 'Essential', label: 'Essential', price: 750 },
    { id: 'Premium',   label: 'Premium',   price: 1100 },
    { id: 'Elite',     label: 'Elite',     price: 1400 },
  ];

  funeralPackages: PackageOption[] = [
    { id: 'Essential', label: 'Essential', price: 600 },
    { id: 'Premium',   label: 'Premium',   price: 900 },
    { id: 'Elite',     label: 'Elite',     price: 1200 },
  ];

  get packages(): PackageOption[] {
    return this.eventType === 'wedding' ? this.weddingPackages : this.funeralPackages;
  }

  get selectedPrice(): number {
    return this.packages.find(p => p.id === this.selectedPackage)?.price ?? 0;
  }

  onEventTypeChange() {
    this.selectedPackage = 'Essential';
  }

  onSubmit() {
    this.submitting = true;
    setTimeout(() => {
      this.success = true;
      this.submitting = false;
      this.resetForm();
    }, 800);
  }

  private resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.eventDate = '';
    this.venue = '';
    this.guestCount = null;
    this.message = '';
    this.selectedPackage = 'Essential';
  }
}
