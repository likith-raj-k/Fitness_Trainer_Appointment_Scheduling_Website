import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.scss']
})
export class EditCustomerDialogComponent {
  @Output() saveClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<EditCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  // Method to close edit button
  public onNoClick(): void {
    this.dialogRef.close();
  }

  // Method to save button in edit mode
  public onSaveClick(): void {
    // Emit the edited data when the Save button is clicked
    this.saveClicked.emit(this.data);
    this.dialogRef.close();
  }
}

