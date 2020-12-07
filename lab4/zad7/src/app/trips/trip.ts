export interface Trip {
  name: string;
  countryOfDestination: string;
  startDate: Date;
  endDate: Date;
  price: number;
  spotsSelected: number;
  spotsAvailable: number;
  spotsMax: number;
  description: string;
  imgLink: string;
}
