import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dog } from '../interfaces/dog';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  randomImageUrl = environment.randomImageUrl
  breedsUrl = environment.listOfBreedUrl

  dogBreeds: string[] = []

  constructor(private http: HttpClient) { }

  getRandomDogImage() {
    return this.http.get<Dog>(this.randomImageUrl)
  }

  getDogBreeds() {
    return this.http.get<Dog>(this.breedsUrl).pipe(
      map(response => {
        Object.keys(response.message).forEach(key => {
          this.dogBreeds.push(key)
        })
        return this.dogBreeds
      })
    )
  }

  getDog(id: string) {

    const dog = this.dogBreeds.find(x => x === id)

    if(dog !== undefined) return of(dog)
    
    else return of("Dog not found")
    
  }

  getDogImage(breed: string){
    return this.http.get<Dog>(`https://dog.ceo/api/breed/${breed}/images/random`)
  }

  getGalleryImages(breed: string){
    return this.http.get<any>(`https://dog.ceo/api/breed/${breed}/images`)
  }

}
