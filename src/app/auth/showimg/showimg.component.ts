import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/_services/auth.services';
import { FileUpload } from '../model/file-upload';
import { getStorage, ref, listAll } from "firebase/storage";
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'shared-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.scss'],
})
export class ShowimgComponent implements OnInit {
  private basePath = '/RoomsImages';
  date = [];
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() showImgApiOutput = new EventEmitter();
  constructor(private db: AngularFirestore, private Api: AuthService, private storage: AngularFireStorage) { }
  tutorials
  ngOnInit() {
    this.db.collection('images').valueChanges().subscribe(res => {
      this.date = res.map(ele => {
        console.log(this.date, ele)
        ele
      });
    });

  }
}
