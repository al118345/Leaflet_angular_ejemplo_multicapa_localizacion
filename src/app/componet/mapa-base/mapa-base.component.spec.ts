import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaBaseComponent } from './mapa-base.component';

describe('MapaBaseComponent', () => {
  let component: MapaBaseComponent;
  let fixture: ComponentFixture<MapaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
