import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

const routes: Routes = [
  { path: 'home', component: DogsListComponent },
  { path: 'dogs/:id', component: DogDetailComponent },
  { path: '**', component: DogsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
