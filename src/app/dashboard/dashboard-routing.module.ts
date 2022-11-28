import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'attendance',
        loadChildren: () => import('../attendance/attendance.module').then( m => m.AttendancePageModule)
      },
      {
        path: 'classnote',
        loadChildren: () => import('../classnote/classnote.module').then( m => m.ClassnotePageModule)
      },
      {
        path: 'user-details',
        loadChildren: () => import('../user-details/user-details.module').then( m => m.UserDetailsPageModule)
      },
      {
        path: 'routine',
        loadChildren: () => import('../routine/routine.module').then( m => m.RoutinePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
