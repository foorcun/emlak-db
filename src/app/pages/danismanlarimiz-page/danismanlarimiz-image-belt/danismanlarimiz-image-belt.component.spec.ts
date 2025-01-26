import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismanlarimizImageBeltComponent } from './danismanlarimiz-image-belt.component';

describe('DanismanlarimizImageBeltComponent', () => {
  let component: DanismanlarimizImageBeltComponent;
  let fixture: ComponentFixture<DanismanlarimizImageBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanismanlarimizImageBeltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanismanlarimizImageBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
