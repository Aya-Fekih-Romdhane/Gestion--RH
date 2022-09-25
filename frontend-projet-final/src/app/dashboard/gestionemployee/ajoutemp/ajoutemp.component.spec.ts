import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutempComponent } from './ajoutemp.component';

describe('AjoutempComponent', () => {
  let component: AjoutempComponent;
  let fixture: ComponentFixture<AjoutempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
