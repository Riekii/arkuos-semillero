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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ark-semillero","appId":"1:1086444225358:web:5c282a83d9f3105fdf541f","databaseURL":"https://ark-semillero-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"ark-semillero.firebasestorage.app","apiKey":"AIzaSyAAFvdWochJad6BEf_MS6eRrNlA8jStQ4E","authDomain":"ark-semillero.firebaseapp.com","messagingSenderId":"1086444225358","measurementId":"G-HLZTM26R61"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()), 
    providePerformance(() => getPerformance()), 
    provideStorage(() => getStorage()),
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

