import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValue } from './input-value';

describe('InputValue', () => {
  let component: InputValue;
  let fixture: ComponentFixture<InputValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
