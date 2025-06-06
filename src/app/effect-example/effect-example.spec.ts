import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectExample } from './effect-example';

describe('EffectExample', () => {
  let component: EffectExample;
  let fixture: ComponentFixture<EffectExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
