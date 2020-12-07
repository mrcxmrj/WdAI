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
    this.cheapestTrip = this.trips[0];
    this.mostExpensiveTrip = this.trips[0];
  }

  ngOnInit(): void {
    console.log(this.trips);
    this.getCheapestAndMostExpensive();
  }

  incrementSpotsSelected(trip: any) {
    trip.spotsSelected += 1;
    trip.spotsAvailable -= 1;
  }

  decrementSpotsSelected(trip: any) {
    trip.spotsSelected -= 1;
    trip.spotsAvailable += 1;
  }

  getCheapestAndMostExpensive(): void {
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
}
