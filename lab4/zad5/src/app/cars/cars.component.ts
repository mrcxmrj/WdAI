import { Colors } from './../colors';
import { CARS } from './../carData';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  testCar: Car = {
    brand: 'Fiat',
    model: '126p',
    availableColors: [Colors.Blue, Colors.Red],
  };

  cars = CARS;
  brands: string[] = [];
  models: string[] = [];
  availableColors: Colors[] = [];
  choice: string[] = ['marka', 'model', 'kolor'];

  constructor() {}

  ngOnInit(): void {
    this.getDistinctBrands();
  }

  getDistinctBrands(): void {
    for (let item of this.cars) {
      if (!this.brands.includes(item.brand)) {
        this.brands.push(item.brand);
        console.log(this.brands);
      }
    }
  }

  brandSelectUpdate(selectedBrand: string): void {
    console.log(selectedBrand);
    this.getModelsByBrand(selectedBrand);
  }

  getModelsByBrand(selectedBrand: string): void {
    this.models = [];
    for (let item of this.cars) {
      if (item.brand === selectedBrand) {
        this.models.push(item.model);
      }
    }
  }

  getAvaiableColorsByModel(selectedBrand: string, selectedModel: string): void {
    this.availableColors = [];
    for (let item of this.cars) {
      if (item.brand === selectedBrand && item.model === selectedModel) {
        this.availableColors = item.availableColors;
      }
    }
  }

  updateChoice(index: number, selected: string): void {
    this.choice[index] = selected;
    console.log(this.choice);
  }
}
