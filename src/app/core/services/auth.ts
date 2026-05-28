import { inject, Injectable } from '@angular/core';

import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';

import { toSignal } from '@angular/core/rxjs-interop';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = inject(Auth);

  // Usuario actual reactivo
  currentUser = toSignal(authState(this.auth));

  // LOGIN EMAIL
  login(email: string, password: string) {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
    );
  }

  // REGISTER EMAIL
  register(email: string, password: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    );
  }

  // LOGIN GOOGLE
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    return from(
      signInWithPopup(this.auth, provider)
    );
  }

  // LOGOUT
  logout() {
    return from(signOut(this.auth));
  }

  // UID
  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}