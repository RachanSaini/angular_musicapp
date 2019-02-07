import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackModule } from './track/track.module';
import { HttpClientModule } from '@angular/common/http';
import { TrackService } from './track/track.service';
import { MatToolbarModule } from '@angular/material';

// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrackModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
