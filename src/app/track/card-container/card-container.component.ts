import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Images } from '../images';
import { Track } from '../track';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  track: Array<Images>;
  private statuscode: number;
  private errorstatus: string;
  constructor(private _trackService: TrackService) {
   }

  ngOnInit() {
    this._trackService.getTrackDetails().subscribe((data: any) => {this.track = data.tracks.track;
      console.log(this.track);
    });
  }
  addtowishlist(value) {
    console.log('value here', value);
    const newTrack = new Track();
    newTrack.trackId = value.url;
    newTrack.trackName = value.name;
    newTrack.trackComment = 'track here';
    this._trackService.addTrackTOWishlist(newTrack).subscribe(
      (response: any) => {
        this.statuscode = response.status;
        if (this.statuscode === 200) {
          console.log('Success', this.statuscode);
        }
      },
      err => {
        const errorstatus = err;
        this.statuscode = parseInt(errorstatus, 10);
        if (this.statuscode === 409) {
          console.log('Not Successful', this.statuscode);
          this.statuscode = 0;
        }
      }
    );
  }
}
