import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {UserService} from './user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import { ColorSampleComponent } from './color-sample/color-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ColorSampleComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,ColorPickerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
