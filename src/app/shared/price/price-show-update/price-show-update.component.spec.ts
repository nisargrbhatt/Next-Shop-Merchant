import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceShowUpdateComponent } from './price-show-update.component';

describe('PriceShowUpdateComponent', () => {
  let component: PriceShowUpdateComponent;
  let fixture: ComponentFixture<PriceShowUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceShowUpdateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceShowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
