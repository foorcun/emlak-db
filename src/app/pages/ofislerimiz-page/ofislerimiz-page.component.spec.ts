import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfislerimizPageComponent } from './ofislerimiz-page.component';

describe('OfislerimizPageComponent', () => {
  let component: OfislerimizPageComponent;
  let fixture: ComponentFixture<OfislerimizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfislerimizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfislerimizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
