import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloService } from './hello.service';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        MatTableModule,
        HttpClientModule,
    MatToolbarModule  
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
