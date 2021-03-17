import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarritoComponent } from './add-carrito.component';

describe('AddCarritoComponent', () => {
  let component: AddCarritoComponent;
  let fixture: ComponentFixture<AddCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
