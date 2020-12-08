import { TRIPS } from './tripsData';
import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  trips: Trip[];
  cheapestTrip: Trip;
  mostExpensiveTrip: Trip;

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
}
