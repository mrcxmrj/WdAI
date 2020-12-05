import { Car } from './car';
import { Colors } from './colors';

export const CARS: Car[] = [
  {
    brand: 'Fiat',
    model: '126p',
    availableColors: [Colors.Red, Colors.Blue],
  },
  {
    brand: 'Fiat',
    model: '500',
    availableColors: [Colors.Red, Colors.Brown, Colors.Green],
  },
  {
    brand: 'Fiat',
    model: 'Tipo',
    availableColors: [Colors.Brown],
  },
  {
    brand: 'Skoda',
    model: 'Octavia',
    availableColors: [Colors.Blue],
  },
  {
    brand: 'Skoda',
    model: 'Superb',
    availableColors: [Colors.Green, Colors.Blue],
  },
  {
    brand: 'Opel',
    model: 'Astra',
    availableColors: [Colors.Red, Colors.Brown],
  },
  {
    brand: 'Toyota',
    model: 'Rav-4',
    availableColors: [Colors.Green, Colors.Blue],
  },
];
