import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcltComponent } from './ajoutclt.component';

describe('AjoutcltComponent', () => {
  let component: AjoutcltComponent;
  let fixture: ComponentFixture<AjoutcltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
