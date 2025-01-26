import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonumComponent } from './konum.component';

describe('KonumComponent', () => {
  let component: KonumComponent;
  let fixture: ComponentFixture<KonumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
