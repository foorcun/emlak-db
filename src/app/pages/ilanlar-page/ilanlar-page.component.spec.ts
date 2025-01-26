import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanlarPageComponent } from './ilanlar-page.component';

describe('IlanlarPageComponent', () => {
  let component: IlanlarPageComponent;
  let fixture: ComponentFixture<IlanlarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlanlarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlanlarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
