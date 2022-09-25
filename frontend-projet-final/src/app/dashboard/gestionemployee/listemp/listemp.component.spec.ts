import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListempComponent } from './listemp.component';

describe('ListempComponent', () => {
  let component: ListempComponent;
  let fixture: ComponentFixture<ListempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
