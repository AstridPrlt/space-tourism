import { Component, OnInit } from '@angular/core';
import DataJson from '../../assets/data.json';

export interface CREWITEM {
  name: string;
  images: string;
  role: string;
  bio: string
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  CrewItems: CREWITEM[] = DataJson.crew;
  crewPerson!: CREWITEM;
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.crewPerson = DataJson.crew[0];
  }

  changeCrewPerson(people: CREWITEM, i: number) {
    this.crewPerson = people;
    this.selectedIndex = i;
  }

}
