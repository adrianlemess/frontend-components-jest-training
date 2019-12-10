import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {
  title = 'Vehicle Store';
  subtitle = 'Trucks Section';

  constructor() { }

  ngOnInit() {
  }

}
