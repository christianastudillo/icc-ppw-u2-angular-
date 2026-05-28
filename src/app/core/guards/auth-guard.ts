import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs';

/**
 * Guard de rutas privadas.
 *
 * Utiliza `authState` como Observable en lugar del signal `currentUser`
 * para evitar una condición de carrera: al navegar directamente a una URL,
 * el signal puede devolver `undefined` antes de que Firebase haya restaurado
 * la sesión persistida, lo que provocaría una redirección incorrecta.
 * `take(1)` espera el primer valor real emitido por Firebase (null | User)
 * y completa el Observable, garantizando una decisión siempre correcta.
 *
 * Acceso: solo usuarios autenticados. Anónimos → redirige a /auth.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    take(1),
    map(user => user ? true : router.createUrlTree(['/auth']))
  );
};