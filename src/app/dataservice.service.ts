import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private clients: any[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', location: 'City1' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', location: 'City2' },
    // Add more clients as needed
  ];

  getClients(): any[] {
    return this.clients;
  }

  getClientById(clientId: string): any | undefined {
    return this.clients.find(client => client.id === clientId);
  }

  getEntriesForCustomer(firstName: string, lastName: string, location: string): any[] {
    // Assuming you have a method to fetch entries based on client details
    // Replace this with your actual implementation
    return [
      { date: '2023-01-01', time: '10:00 AM', action: 'Action1' },
      { date: '2023-01-02', time: '02:30 PM', action: 'Action2' },
      // Add more entries as needed
    ];
  }
}