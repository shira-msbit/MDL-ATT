import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MdlModule} from '@angular-mdl/core';
import { AttButtonComponent } from './att-button/att-button.component';
import { AttDropdownComponent } from './att-dropdown/att-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AttButtonComponent,
    AttDropdownComponent
  ],
  imports: [
    BrowserModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
