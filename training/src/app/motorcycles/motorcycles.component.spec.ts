import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclesComponent } from './motorcycles.component';

describe('MotorcyclesComponent', () => {
  let component: MotorcyclesComponent;
  let fixture: ComponentFixture<MotorcyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
