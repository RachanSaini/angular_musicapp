import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../track';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from '../track.service';
import { Images } from '../images';
import { Image } from '../image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
trackComment: string;
@Input()
track: Track;
@Input()
imageName: Images;
@Input()
imageUrl: Images;
@Output() addTrackEvent = new EventEmitter<any>();
constructor( private trackService: TrackService) {
   }
  ngOnInit() {
  }
  onClickMe() {
    this.addTrackEvent.emit(this.track);
  }
}
