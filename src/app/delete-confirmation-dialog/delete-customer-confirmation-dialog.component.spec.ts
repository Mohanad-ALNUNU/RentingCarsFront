import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerConfirmationDialogComponent } from './delete-customer-confirmation-dialog.component';

describe('DeleteCustomerConfirmationDialogComponent', () => {
  let component: DeleteCustomerConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteCustomerConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCustomerConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteCustomerConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
