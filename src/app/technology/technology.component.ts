import { Component, OnInit } from '@angular/core';
import DataJson from '../../assets/data.json';

export interface Images {
  portrait: string;
  landscape: string;
}
export interface TECHNOITEMS {
  name: string;
  images: Images;
  description: string;
}

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  TechnoItems: TECHNOITEMS[] = DataJson.technology;
  technology!: TECHNOITEMS;
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.technology = DataJson.technology[0];
    console.log(this.technology.images.portrait);
  }

  changeTechno(techno: TECHNOITEMS, i: number) {
    this.technology = techno;
    this.selectedIndex = i;
  }

}
