import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondepartementComponent } from './gestiondepartement.component';

describe('GestiondepartementComponent', () => {
  let component: GestiondepartementComponent;
  let fixture: ComponentFixture<GestiondepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
