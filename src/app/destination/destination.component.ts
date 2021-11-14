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

  constructor() { }

  ngOnInit(): void {
    console.log(this.DestinationItems);
  }

}
