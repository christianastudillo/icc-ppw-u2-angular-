import { Component, inject, signal } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { SimpsonsService } from '../../services/simpsons.service';

import { SimpsonsCacheService } from '../../services/simpsons-cache.service';

import { rxResource } from '@angular/core/rxjs-interop';

import { of, tap } from 'rxjs';

import { AuthService } from '../../../../core/services/auth';

import { FavoritesService } from '../../../../core/services/favorites';

@Component({
  selector: 'app-simpson-detail-page',

  imports: [RouterLink],

  templateUrl: './simpson-detail-page.html',

  styleUrl: './simpson-detail-page.css',
})
export class SimpsonDetailPage {

  private route = inject(ActivatedRoute);

  private simpsonsService = inject(SimpsonsService);

  private cacheService = inject(SimpsonsCacheService);

  authService = inject(AuthService);

  private favoritesService = inject(FavoritesService);

  isFavorite = signal(false);

  // Convertimos el parametro de ruta a numero.
  private characterId = Number(
    this.route.snapshot.paramMap.get('id')
  );

  // Resource reactivo.
  characterResource = rxResource({
    stream: () => {

      // Paso A: buscar primero en cache local.
      const cached = this.cacheService.getById(
        this.characterId
      );

      if (cached) {

        // Si existe en localStorage.
        return of(cached);

      }

      // Paso B: consultar API.
      return this.simpsonsService
        .getCharacterById(this.characterId)
        .pipe(

          // Guardamos cache.
          tap((character) =>
            this.cacheService.save(character)
          )
        );
    },
  });

  toggleFavorite() {

    const uid = this.authService.uid;

    if (!uid) return;

    if (this.isFavorite()) {

      this.favoritesService
        .removeFavorite(uid, this.characterId)
        .then(() => {

          this.isFavorite.set(false);

        });

    } else {

      this.favoritesService
        .addFavorite(uid, this.characterId)
        .then(() => {

          this.isFavorite.set(true);

        });
    }
  }
}