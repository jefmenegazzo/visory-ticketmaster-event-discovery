import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionListComponent } from './attraction-list.component';

describe('AttractionListComponent', () => {
  let component: AttractionListComponent;
  let fixture: ComponentFixture<AttractionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
