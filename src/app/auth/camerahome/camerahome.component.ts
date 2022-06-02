import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-camerahome',
  templateUrl: './camerahome.component.html',
  styleUrls: ['./camerahome.component.scss'],
})
export class CamerahomeComponent implements OnInit {
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() cameraHomeApiOutput = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
