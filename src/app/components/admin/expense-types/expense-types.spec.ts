import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTypes } from './expense-types';

describe('ExpenseTypes', () => {
  let component: ExpenseTypes;
  let fixture: ComponentFixture<ExpenseTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
