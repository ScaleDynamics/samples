import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class AppModule { }
