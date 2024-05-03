import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { routes } from '../../../core/helpers/routes';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
public routes=routes
/* eslint-disable @typescript-eslint/no-explicit-any */
public albumsOne: any = [];
constructor(private _lightbox: Lightbox) {
  for (let i = 1; i <= 15; i++) {
    const src = 'assets/img/gallery/gallery4/gallery-0' + i + '.png';
    this.albumsOne.push({ src: src });
  }
}
/* eslint-disable @typescript-eslint/no-explicit-any */
open(index: number, albumArray: Array<any>): void {
  this._lightbox.open(albumArray, index);
}

close(): void {
  this._lightbox.close();
}

}
