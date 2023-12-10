import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public customers: any[] = [
    { firstname: 'John', lastname: 'Doe', location: 'Chicago' },
    { firstname: 'Albert', lastname: 'Smith', location: 'New York City' },
    // Add more customer data as needed
  ];
  public isDialogOpen = false;

  constructor(private router: Router,private dialog: MatDialog) {}

  // method to open mat-dialog box for add customer button
  public openCustomerFormDialog(): void {
    this.isDialogOpen = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.position = { top: '-35%', left: '40%' };
    dialogConfig.panelClass = 'custom-dialog-class';

    const dialogRef = this.dialog.open(CustomerFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.firstname && result.lastname && result.location) {
        debugger;
        // Add the new customer to the existing list
        this.customers.push(result);
        console.log(this.customers);
      }
      this.isDialogOpen = false; // Reset the state
    });
  }

  // method to delete customer row
  public deleteCustomer(customer: any): void {
    const confirmation = window.confirm(`Are you sure you want to delete ${customer.firstname} ${customer.lastname}?`);
    if (confirmation) {
      // Implement the logic for deleting the customer from your array
      const index = this.customers.indexOf(customer);
      if (index !== -1) {
        this.customers.splice(index, 1);
      }
    }
  }

  // Method to view customer details
  public viewCustomer(customer: any): void {
    // Navigate to the ViewComponent with the customer data
    this.router.navigate(['/view', customer.firstname, customer.lastname, customer.location]);
  }
}
