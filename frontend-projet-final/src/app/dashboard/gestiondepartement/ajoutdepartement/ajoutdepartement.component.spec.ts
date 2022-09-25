import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdepartementComponent } from './ajoutdepartement.component';

describe('AjoutdepartementComponent', () => {
  let component: AjoutdepartementComponent;
  let fixture: ComponentFixture<AjoutdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
