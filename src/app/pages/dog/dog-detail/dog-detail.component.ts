import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  dog: any
  image: any
  galleryImages: any = []

  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.loadDog()
    this.loadDogImage()
    this.loadGalleryImages()

  }

  loadDog() {
    this.dogService.getDog(this.route.snapshot.params.id || '').subscribe(dog => {
      this.dog = dog
    })
  }

  loadDogImage() {
    this.dogService.getDogImage(this.route.snapshot.params.id || '').subscribe(image => {
      this.image = image
    })
  }

  loadGalleryImages() {
    this.dogService.getGalleryImages(this.route.snapshot.params.id || '').subscribe(images => {
      this.galleryImages = images.message.slice(0, 9)
    })
  }

}
