import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  title="Video List";
  videoList=["Avengers","Thor Ragnarok"];

  constructor() { }

  ngOnInit() {
  }

}
