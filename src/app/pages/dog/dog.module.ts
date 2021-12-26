import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { RandomDogImageComponent } from './random-dog-image/random-dog-image.component';
import { DogRoutingModule } from './dog-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DogsListComponent,
    DogCardComponent,
    DogDetailComponent,
    RandomDogImageComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class DogModule { }
