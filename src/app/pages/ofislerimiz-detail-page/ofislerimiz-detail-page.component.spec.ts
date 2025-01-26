import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfislerimizDetailPageComponent } from './ofislerimiz-detail-page.component';

describe('OfislerimizDetailPageComponent', () => {
  let component: OfislerimizDetailPageComponent;
  let fixture: ComponentFixture<OfislerimizDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfislerimizDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfislerimizDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
