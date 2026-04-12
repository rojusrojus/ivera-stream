import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@vercel/analytics';
import { environment } from './environments/environment';

// Initialize Vercel Web Analytics with environment-aware configuration
inject({
  mode: environment.production ? 'production' : 'development',
  debug: !environment.production,
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
