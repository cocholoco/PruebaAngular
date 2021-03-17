import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDetailsComponent } from './carrito-details.component';

describe('CarritoDetailsComponent', () => {
  let component: CarritoDetailsComponent;
  let fixture: ComponentFixture<CarritoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
