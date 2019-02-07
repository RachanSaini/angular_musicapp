import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { TrackbodycomponentComponent } from './trackbodycomponent/trackbodycomponent.component';
import { SearchComponent } from './search/search.component';
import { DialogComponent } from './dialog/dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HeadercomponentComponent, FootercomponentComponent,
    TrackbodycomponentComponent, SearchComponent, DialogComponent,
     DashboardComponent, CardContainerComponent, CardComponent, WishlistComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [HeadercomponentComponent, FootercomponentComponent,
    TrackbodycomponentComponent, SearchComponent, DialogComponent,
     DashboardComponent, CardContainerComponent, CardComponent]
})
export class TrackModule { }
