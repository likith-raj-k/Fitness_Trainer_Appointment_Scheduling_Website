import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  public customers: any[] = [
    // your customer data
  ];
  public firstName: string = '';
  public lastName: string = '';
  public location: string = '';
  public entries: any[] = [{ dateTime: '' }];
  public editMode: boolean = false;
  public showAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the customer data from the route parameters
    this.route.params.subscribe(params => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.location = params['location'];

      // Assuming your DataService has a method to get entries
      this.entries = this.dataService.getEntriesForCustomer(this.firstName, this.lastName, this.location);
    });
  }

  // Method to show alert mesaage for save button
  public showSuccessAlert(): void {
    this.showAlert = true;
    setTimeout(() => {
      this.closeAlert();
    }, 1500);
  }

// Method to close the alert
  public closeAlert(): void {
    this.showAlert = false;
  }
  

  // Method to Edit button
  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
  
  // Method to cancel button
  public cancelEdit(): void {
    this.editMode = false;
  }

  // Method to confirmation for delete appointment
  public confirmDeleteAppointment(index: number): void {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this appointment?');
  
    // Check if the user confirmed the action
    if (isConfirmed) {
      // Remove the appointment at the specified index
      this.entries.splice(index, 1);
      window.alert("Appointment Deleted successfully");
    }
  }
   
// Method to add the appointment
  public addAppointment(): void {
    // Add a new entry with an empty dateTime
    this.entries.push({ dateTime: '' });
  }

  // Method to go back to previous page
  public goBack(): void {
    this.router.navigate(['/']); // Specify the route/path you want to navigate back to
  }
}