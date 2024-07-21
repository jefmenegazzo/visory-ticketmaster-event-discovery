import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionDetailComponent } from './attraction-detail.component';

describe('AttractionDetailComponent', () => {
  let component: AttractionDetailComponent;
  let fixture: ComponentFixture<AttractionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractionDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
