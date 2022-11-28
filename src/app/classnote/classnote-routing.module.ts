import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassnotePage } from './classnote.page';

const routes: Routes = [
  {
    path: '',
    component: ClassnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassnotePageRoutingModule {}
