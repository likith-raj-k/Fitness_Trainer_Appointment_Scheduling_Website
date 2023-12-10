import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },  
  { path: 'view/:firstName/:lastName/:location', component: ViewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
