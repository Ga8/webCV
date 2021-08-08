import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthCanevaComponent } from './earth-caneva.component';

describe('EarthCanevaComponent', () => {
  let component: EarthCanevaComponent;
  let fixture: ComponentFixture<EarthCanevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthCanevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthCanevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
