import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcltComponent } from './listclt.component';

describe('ListcltComponent', () => {
  let component: ListcltComponent;
  let fixture: ComponentFixture<ListcltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
