import { TRIPS } from './tripsData';
import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  trips: Trip[];
  cheapestTrip: Trip;
  mostExpensiveTrip: Trip;
  newTripForm: FormGroup = new FormGroup({
    name: new FormControl(),
    countryOfDestination: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    price: new FormControl(),
    //spotsSelected ustawić na 0 przy tworzeniu nowego obiektu
    spotsAvailable: new FormControl(),
    spotsMax: new FormControl(),
    description: new FormControl(),
    imgLink: new FormControl(),
  });

  constructor() {
    this.trips = TRIPS;
  }

  ngOnInit(): void {
    console.log(this.trips);
    this.getCheapestAndMostExpensive();
  }

  incrementSpotsSelected(trip: any): void {
    trip.spotsSelected += 1;
    trip.spotsAvailable -= 1;
  }

  decrementSpotsSelected(trip: any): void {
    trip.spotsSelected -= 1;
    trip.spotsAvailable += 1;
  }

  getCheapestAndMostExpensive(): void {
    this.cheapestTrip = this.trips[0];
    this.mostExpensiveTrip = this.trips[0];
    for (let trip of this.trips) {
      if (trip.price < this.cheapestTrip.price) {
        this.cheapestTrip = trip;
      }
      if (trip.price > this.mostExpensiveTrip.price) {
        this.mostExpensiveTrip = trip;
      }
    }
    console.log(this.cheapestTrip);
    console.log(this.mostExpensiveTrip);
  }

  removeTrip(trip: any): void {
    const index: number = this.trips.indexOf(trip);
    this.trips.splice(index, 1);
    this.getCheapestAndMostExpensive();
  }

  addNewTrip() {
    let newTrip: Trip = {
      name: this.newTripForm.value.name,
      countryOfDestination: this.newTripForm.value.countryOfDestination,
      startDate: new Date(this.newTripForm.value.startDate),
      endDate: new Date(this.newTripForm.value.endDate),
      price: this.newTripForm.value.price,
      spotsSelected: 0,
      spotsAvailable: this.newTripForm.value.spotsAvailable,
      spotsMax: this.newTripForm.value.spotsMax,
      description: this.newTripForm.value.description,
      imgLink: this.newTripForm.value.imgLink,
    };
    this.trips.push(newTrip);
  }
}
