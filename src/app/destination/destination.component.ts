import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import DataJson from '../../assets/data.json';

interface DESTINATIONITEM {
  name: string;
  images: string;
  description: string;
  distance: string;
  travel: string;
}

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],

  encapsulation: ViewEncapsulation.None
})

export class DestinationComponent implements OnInit {

  DestinationItems: DESTINATIONITEM[] = DataJson.destinations;
  destination!: DESTINATIONITEM;
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.destination = DataJson.destinations[0];
  }

  changeDestination(selectedDestination: DESTINATIONITEM, i: number) {
    this.destination = selectedDestination;
    this.selectedIndex = i;
  }

}
