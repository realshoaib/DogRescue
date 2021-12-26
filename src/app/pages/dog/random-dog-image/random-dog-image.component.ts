import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-random-dog-image',
  templateUrl: './random-dog-image.component.html',
  styleUrls: ['./random-dog-image.component.css']
})
export class RandomDogImageComponent implements OnInit {

  constructor(private dogService: DogService) { }

  imageUrl?: string;

  ngOnInit(): void {
    this.loadRandomDogImage()
  }

  loadRandomDogImage() {
    this.dogService.getRandomDogImage().subscribe(response  => {
      this.imageUrl = response.message;
    });

  }

}
