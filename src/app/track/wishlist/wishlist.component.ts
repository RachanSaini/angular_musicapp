import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Track } from '../track';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  private tracks: Array<Track>;
  tr: string;
  constructor(private trackservice: TrackService) {
   }
  ngOnInit() {
    this.tracks = [];
    this.fetchTracks();
  }
  private fetchTracks() {
    this.trackservice.getAddedTracks().subscribe((res: any) => {
      this.tracks = res;
      console.log(this.tracks);
      this.tracks.map(data => {
        console.log('whishlist', data.trackName);
      });
      });
  }

}
