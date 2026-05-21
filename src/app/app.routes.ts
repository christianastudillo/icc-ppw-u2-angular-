import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { SignupComponent } from './pages/signup/signup';
import { SignupPage } from './features/signup/pages/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import ProjectConfigPage from './features/project/pages/project-config-page';

import { LayoutsPage } from './features/layouts/pages/layouts-page';

export const routes: Routes = [

  {
    path: '',
    component: HomePage
  },

  {
    path: 'students',
    component: StudentsPage
  },

  {
    path: 'students/:id',
    component: StudentDetailPage
  },

  {
    path: 'layouts',
    component: LayoutsPage
  },

  {
    path: '',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupPage
  },
  {
      path: 'profile',
      component: ProfilePage
  },
  {
    path: 'project-config',
    component: ProjectConfigPage
  },
  {
    path: '**',
    redirectTo: ''
  }

];