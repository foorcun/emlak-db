import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBeltComponent } from './button-belt.component';

describe('ButtonBeltComponent', () => {
  let component: ButtonBeltComponent;
  let fixture: ComponentFixture<ButtonBeltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBeltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
