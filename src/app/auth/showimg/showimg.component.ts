import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.scss'],
})
export class ShowimgComponent implements OnInit {
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() showImgApiOutput = new EventEmitter();
  constructor() { }

  ngOnInit() { }

}
