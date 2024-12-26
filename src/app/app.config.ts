import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()), 
    providePerformance(() => getPerformance()), 
  ]
};
// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(
//       provideFirebaseApp(() => initializeApp(environment.firebase))
//     ),
//     importProvidersFrom(
//       provideFirestore(() => getFirestore())
//     )
//   ]
// })

