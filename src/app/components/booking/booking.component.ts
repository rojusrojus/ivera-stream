import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface PackageOption {
  id: string;
  label: string;
  price: string;
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

  weddingPackages: PackageOption[] = [
    { id: 'Essential', label: 'Essential', price: '500' },
    { id: 'Premium',   label: 'Premium',   price: '700-900' },
    { id: 'Elite',     label: 'Elite',     price: '1200+' },
  ];

  funeralPackages: PackageOption[] = [
    { id: 'Essential', label: 'Essential', price: '350' },
    { id: 'Premium',   label: 'Premium',   price: '500-700' },
    { id: 'Elite',     label: 'Elite',     price: '900+' },
  ];

  get packages(): PackageOption[] {
    return this.eventType === 'wedding' ? this.weddingPackages : this.funeralPackages;
  }

  onEventTypeChange() {
    this.selectedPackage = 'Essential';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const pkg = this.packages.find(p => p.id === this.selectedPackage);
    const body = [
      `Name: ${this.name}`,
      `Email: ${this.email}`,
      `Phone: ${this.phone || 'Not provided'}`,
      `Event Type: ${this.eventType === 'wedding' ? 'Wedding' : 'Memorial / Funeral'}`,
      `Package: ${pkg?.label} — $${pkg?.price}`,
      'Promo Request: Season Kick-Off Sale (first 3 orders at 50% off regular pricing)',
      `Event Date: ${this.eventDate}`,
      `Venue: ${this.venue}`,
      `Virtual Guest Count: ${this.guestCount ?? 'Not specified'}`,
      `\nAdditional Details:\n${this.message || 'None'}`,
    ].join('\n');

    const subject = `Booking Request — ${this.eventType === 'wedding' ? 'Wedding' : 'Memorial'} (${this.eventDate})`;
    const mailto = `mailto:sales@ivera.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }
}
