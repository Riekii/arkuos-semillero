import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

const firebaseConfig = {
  apiKey: "AIzaSyAAFvdWochJad6BEf_MS6eRrNlA8jStQ4E",
  authDomain: "ark-semillero.firebaseapp.com",
  projectId: "ark-semillero",
  storageBucket: "ark-semillero.firebasestorage.app",
  messagingSenderId: "1086444225358",
  appId: "1:1086444225358:web:5c282a83d9f3105fdf541f",
  measurementId: "G-HLZTM26R61"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
