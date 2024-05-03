import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';

const routes: Routes = [{ path: '', component: LessonComponent,
children : [
  { 
    path: 'lesson-type', 
    loadChildren: () => 
    import('./lesson-type/lesson-type.module').then(m => (m).LessonTypeModule) 
  },
  { 
    path: 'lesson-timedate', 
    loadChildren: () => 
    import('./lesson-timedate/lesson-timedate.module').then(m => (m).LessonTimedateModule) 
  },
  { 
    path: 'lesson-personalinfo', 
    loadChildren: () => 
    import('./lesson-personalinfo/lesson-personalinfo.module').then(m => (m).LessonPersonalinfoModule) 
  },
  { 
    path: 'lesson-order-confirm', 
    loadChildren: () => 
    import('./lesson-order-confirm/lesson-order-confirm.module').then(m => (m).LessonOrderConfirmModule) 
  },
  { 
    path: 'lesson-payment', 
    loadChildren: () => 
    import('./lesson-payment/lesson-payment.module').then(m => (m).LessonPaymentModule) 
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
