import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StddetailsComponent } from './stddetails/stddetails.component';
import { StdListComponent } from './std-list/std-list.component';

const appRoutes: Routes = [
  {path:'stdDetails/:id',component:StddetailsComponent},
  {path:'survey',component:StudentComponent},
  {path:'list',component:StdListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StddetailsComponent,
    StdListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

