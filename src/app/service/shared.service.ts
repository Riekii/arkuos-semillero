import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Redondea hacia arriba el mínimo
    max = Math.floor(max); // Redondea hacia abajo el máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
