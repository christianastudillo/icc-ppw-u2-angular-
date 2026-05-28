import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs';

/**
 * Guard de rutas para visitantes (no autenticados).
 *
 * Mismo patrón que `authGuard`: consume `authState` como Observable
 * para garantizar que Firebase haya resuelto el estado de sesión antes
 * de tomar la decisión de acceso. Sin esto, el signal `currentUser`
 * devuelve `undefined` en la carga inicial y el guard permite el acceso
 * a `/auth` aunque el usuario ya tenga sesión activa.
 *
 * Acceso: solo usuarios anónimos. Autenticados → redirige a /.
 */
export const guestGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    take(1),
    map(user => user ? router.createUrlTree(['/']) : true)
  );
};