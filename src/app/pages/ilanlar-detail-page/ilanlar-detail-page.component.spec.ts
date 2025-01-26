import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanlarDetailPageComponent } from './ilanlar-detail-page.component';

describe('IlanlarDetailPageComponent', () => {
  let component: IlanlarDetailPageComponent;
  let fixture: ComponentFixture<IlanlarDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlanlarDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlanlarDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
