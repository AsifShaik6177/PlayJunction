import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
    children: [
      {
        path: 'coach-profile',
        loadChildren: () =>
          import('./coach-profile/coach-profile.module').then(
            (m) => m.CoachProfileModule
          ),
      },
      {
        path: 'appointment-details',
        loadChildren: () =>
          import('./appointment-details/appointment-details.module').then(
            (m) => m.AppointmentDetailsModule
          ),
      },
      {
        path: 'othersetting',
        loadChildren: () =>
          import('./othersetting/othersetting.module').then(
            (m) => m.OthersettingModule
          ),
      },
      {
        path: 'availability',
        loadChildren: () =>
          import('./setting-availability/setting-availability.module').then(
            (m) => m.SettingAvailabilityModule
          ),
      },
      {
        path: 'setting-password',
        loadChildren: () =>
          import('./setting-password/setting-password.module').then(
            (m) => m.SettingPasswordModule
          ),
      },
      {
        path: 'setting-lesson',
        loadChildren: () =>
          import('./setting-lesson/setting-lesson.module').then(
            (m) => m.SettingLessonModule
          ),
      },
      {
        path: 'myprofile',
        loadChildren: () =>
          import('./myprofile/myprofile.module').then((m) => m.MyprofileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileSettingsRoutingModule {}
