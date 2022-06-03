import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/_services/auth.services';
import { FileUpload } from '../model/file-upload';
import { getStorage, ref, listAll } from "firebase/storage";
@Component({
  selector: 'shared-showimg',
  templateUrl: './showimg.component.html',
  styleUrls: ['./showimg.component.scss'],
})
export class ShowimgComponent implements OnInit {
  private basePath = '/RoomsImages';
  @Input() position = 'floating';
  @Input() mode = "mode";
  @Output() showImgApiOutput = new EventEmitter();
  constructor(private db: AngularFireDatabase, private Api: AuthService, private storage: AngularFireStorage) { }

  ngOnInit() { }

  getImages(fileUpload: FileUpload) {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    console.log('filePath-------', filePath);
    const storageRef = this.storage.ref(filePath);
    console.log('storageRef-------', storageRef);

  }


}
