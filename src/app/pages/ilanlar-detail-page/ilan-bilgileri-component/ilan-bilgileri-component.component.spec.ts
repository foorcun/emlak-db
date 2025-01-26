import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanBilgileriComponentComponent } from './ilan-bilgileri-component.component';

describe('IlanBilgileriComponentComponent', () => {
  let component: IlanBilgileriComponentComponent;
  let fixture: ComponentFixture<IlanBilgileriComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlanBilgileriComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlanBilgileriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
