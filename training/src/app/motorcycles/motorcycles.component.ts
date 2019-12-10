import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrls: ['./motorcycles.component.scss']
})
export class MotorcyclesComponent implements OnInit {
  title = 'Vehicle Store';
  subtitle = 'MotorCycles Section';

  constructor() { }

  ngOnInit() {
  }

}
