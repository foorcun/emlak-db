import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismanDetailPageComponent } from './danisman-detail-page.component';

describe('DanismanDetailPageComponent', () => {
  let component: DanismanDetailPageComponent;
  let fixture: ComponentFixture<DanismanDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanismanDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanismanDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
