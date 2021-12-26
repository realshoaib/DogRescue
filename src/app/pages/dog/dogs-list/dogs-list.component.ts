import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {

  dogNames: string[] = []
  filterDogNames: string[] = []

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.loadDogs()
  }

  loadDogs() {
    this.dogService.getDogBreeds().subscribe(dogs => {
      this.dogNames = dogs.slice(0, 9)
      this.filterDogNames = this.dogNames;
    })
  }

  filterDogs(dog: any) {
    const filterValue = (dog.target as HTMLInputElement).value;
    if (filterValue.length > 0) {
      this.filterDogNames = this.dogNames.filter(name => name.toLowerCase().includes(filterValue.toLowerCase()));
    }
  }

}
