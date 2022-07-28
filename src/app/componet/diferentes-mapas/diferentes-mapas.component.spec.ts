import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferentesMapasComponent } from './diferentes-mapas.component';

describe('DiferentesMapasComponent', () => {
  let component: DiferentesMapasComponent;
  let fixture: ComponentFixture<DiferentesMapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferentesMapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferentesMapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
