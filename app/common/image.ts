/// <reference path="underscore/underscore.d.ts" />
import { Component, Injectable } from '@angular/core';

export interface Image {
  main: string;
  alt: string;
  sizes: Object; // { size: url }
}

@Component({
  selector: 'image',
  template: `<img
    src="{{ image.main }}"
    srcset="{{ srcset }}"
    alt="{{ image.alt }}"
  >`
})
export class ImageComponent {
  private image: Image;

  constructor(main, alt, sizes = {}) {
    this.image.main = main;
    this.image.alt = alt;
    this.image.sizes = sizes;
    this.srcset = this.toSrcset(sizes);
  }

  private toSrcset(src: Object): string {
    // keys in the from of w-h (ie. 200-400)
    return `${_.keys(src)
      .map((key, index) => {
        let url = src[key];
        let w = key.split('-')[0];
        let h = key.split('-')[1];

        return `${url} ${w}w ${h}h ${(index < (keys.length - 1)) ? ',\n' : ''}`;
      }).reduce(x, y => x + y)}`;
  }
}

@Injectable()
export class ImageService {
  get(): Image {
    return null;
  }

  upload(): void { }
}
