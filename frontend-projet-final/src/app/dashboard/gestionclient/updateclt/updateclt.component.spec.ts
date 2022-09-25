import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecltComponent } from './updateclt.component';

describe('UpdatecltComponent', () => {
  let component: UpdatecltComponent;
  let fixture: ComponentFixture<UpdatecltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
