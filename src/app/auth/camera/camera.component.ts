import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../core/_services/auth.services';
@Component({
  selector: 'shared-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraApiOutput = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
