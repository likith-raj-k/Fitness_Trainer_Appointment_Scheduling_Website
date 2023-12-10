import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { DataserviceService } from './dataservice.service';
import { FormsModule } from '@angular/forms';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewPageComponent,
    EditCustomerDialogComponent,
    CustomerFormComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
