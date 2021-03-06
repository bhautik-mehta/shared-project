import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'shared-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraApiOutput = new EventEmitter();

  profile: null;
  imageUrl: null;
  constructor(
  ) {

  }

  ngOnInit() {
    // console.log('hello world');
  }

}
