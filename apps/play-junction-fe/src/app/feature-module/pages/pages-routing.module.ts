import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('./maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
      },
      {
        path: 'event-details',
        loadChildren: () =>
          import('./event-details/event-details.module').then(
            (m) => m.EventDetailsModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'our-teams',
        loadChildren: () =>
          import('./our-teams/our-teams.module').then((m) => m.OurTeamsModule),
      },

      {
        path: 'gallery',
        loadChildren: () =>
          import('./gallery/gallery.module').then((m) => m.GalleryModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'service-detail',
        loadChildren: () =>
          import('./service-detail/service-detail.module').then(
            (m) => m.ServiceDetailModule
          ),
      },
      {
        path: 'testimonial',
        loadChildren: () =>
          import('./testimonial/testimonial.module').then(
            (m) => m.TestimonialModule
          ),
      },
      {
        path: 'coming-soon',
        loadChildren: () =>
          import('./coming-soon/coming-soon.module').then(
            (m) => m.ComingSoonModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('./terms-condition/terms-condition.module').then(
            (m) => m.TermsConditionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
