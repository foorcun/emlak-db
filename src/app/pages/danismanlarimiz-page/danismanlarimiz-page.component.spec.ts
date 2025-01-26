import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismanlarimizPageComponent } from './danismanlarimiz-page.component';

describe('DanismanlarimizPageComponent', () => {
  let component: DanismanlarimizPageComponent;
  let fixture: ComponentFixture<DanismanlarimizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanismanlarimizPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanismanlarimizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
