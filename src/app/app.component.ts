import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TechSetupComponent } from './components/tech-setup/tech-setup.component';
import { PackagesComponent } from './components/packages/packages.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    HowItWorksComponent,
    TechSetupComponent,
    PackagesComponent,
    WhyUsComponent,
    TestimonialsComponent,
    BookingComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-services />
      <app-how-it-works />
      <app-tech-setup />
      <app-packages />
      <app-why-us />
      <app-testimonials />
      <app-booking />
    </main>
    <app-footer />
  `,
  styles: [`
    main { display: block; }
  `]
})
export class AppComponent {}
