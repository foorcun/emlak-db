import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AciklamaComponent } from './aciklama.component';

describe('AciklamaComponent', () => {
  let component: AciklamaComponent;
  let fixture: ComponentFixture<AciklamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AciklamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AciklamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
