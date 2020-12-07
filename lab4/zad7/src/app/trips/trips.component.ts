import { TRIPS } from './tripsData';
import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  trips: Trip[] = TRIPS;

  constructor() {}

  ngOnInit(): void {
    console.log(this.trips);
  }

  incrementSpotsSelected(trip: any) {
    trip.spotsSelected += 1;
    trip.spotsAvailable -= 1;
  }

  decrementSpotsSelected(trip: any) {
    trip.spotsSelected -= 1;
    trip.spotsAvailable += 1;
  }
}
