import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SignupPage } from './features/signup/pages/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import ProjectConfigPage from './features/project/pages/project-config-page';
import UiComponentsPage from './features/ui-components/pages/ui-components-page';
import { SimpsonsPage } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  // Solo visitantes
  {
    path: 'auth',
    component: AuthPage,
    canActivate: [guestGuard],
  },

  // Privadas
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [authGuard],
  },
  {
    path: 'project-config',
    component: ProjectConfigPage,
    canActivate: [authGuard],
  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPage,
    canActivate: [authGuard],
  },

  // Públicas
  {
    path: 'students',
    component: StudentsPage,
  },
  {
    path: 'students/:id',
    component: StudentDetailPage,
  },
  {
    path: 'layouts',
    component: LayoutsPage,
  },
  {
    path: 'forms',
    component: SignupPage,
  },
  {
    path: 'ui-components',
    component: UiComponentsPage,
  },
  {
    path: 'simpsons',
    component: SimpsonsPage,
  },

  // Wildcard
  {
    path: '**',
    redirectTo: '',
  },
];