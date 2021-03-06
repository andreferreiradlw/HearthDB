import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from '../app/home-view/home-view.component';
import { SearchFilterPipePipe } from './SearchFilterPipe.pipe';
import { OrderByPipePipe } from './orderByPipe.pipe';


const routes: Routes = [
  { path: '', component: HomeViewComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      SearchFilterPipePipe,
      OrderByPipePipe
   ]
})
export class AppRoutingModule { }
