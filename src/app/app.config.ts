import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

import {
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';

import {
  getAuth,
  provideAuth,
} from '@angular/fire/auth';

import {
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true,
    }),

    provideRouter(routes),

    provideHttpClient(withFetch()),

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ppw-practica-3c549',
        appId: '1:379324526457:web:10033116941226417089a8',
        storageBucket: 'ppw-practica-3c549.firebasestorage.app',
        apiKey: 'AIzaSyCjHX4wbLMtnJCcmBDsHaca_QRJp6Owm34',
        authDomain: 'ppw-practica-3c549.firebaseapp.com',
        messagingSenderId: '379324526457',
        measurementId: 'G-L7J5B307DP',
        //projectNumber: '379324526457',
        //version: '2',
      }),
    ),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
  ],
};