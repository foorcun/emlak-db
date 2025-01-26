import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanismanHeroBeltComponent } from './danisman-hero-belt.component';

describe('DanismanHeroBeltComponent', () => {
  let component: DanismanHeroBeltComponent;
  let fixture: ComponentFixture<DanismanHeroBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanismanHeroBeltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanismanHeroBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
