import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  customer: any = {
    firstName: '',
    lastName: '',
    location: ''
  };

  constructor(public dialogRef: MatDialogRef<CustomerFormComponent>) {}

  // Method to close the dialog box
  public onNoClick(): void {
    this.dialogRef.close();
  }
}
