import { Component, Input, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  @Input() dogName: string = ''

  dogImage: string = ''

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getDogImage(this.dogName).subscribe(image => {
      this.dogImage = image.message
    })
  }

}
