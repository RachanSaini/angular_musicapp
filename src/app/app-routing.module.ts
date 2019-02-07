import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './track/wishlist/wishlist.component';
import { CardContainerComponent } from './track/card-container/card-container.component';

const routes: Routes = [{

  path: '',

  component: CardContainerComponent,

  data: { country: 'Australia' }

},

{

  path: 'India',

  component: CardContainerComponent,

  data: { country: 'India' }

},

{

  path: 'Spain',

  component: CardContainerComponent,

  data: { country: 'Spain' }

},

{

  path: 'wishlist',

  component: WishlistComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
