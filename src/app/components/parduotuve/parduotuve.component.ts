import { Component, OnInit } from '@angular/core';
import { Preke } from 'src/app/models/preke';
//import { Nuotrauka } from 'src/app/img';

@Component({
  selector: 'app-parduotuve',
  templateUrl: './parduotuve.component.html',
  styleUrls: ['./parduotuve.component.scss']
})
export class ParduotuveComponent implements OnInit {
  public prekes: Preke[] = [];

  constructor() {
    this.prekes.push(new Preke('Taburete', 15, 'assets/img/taburete.jpg'));
    this.prekes.push(new Preke('Stalas', 25, 'assets/img/stalas.jpg'));
    this.prekes.push(new Preke('Uslanelis', 10, 'assets/img/suoliukas.jpg'));
  }

  ngOnInit(): void {
  }


}
