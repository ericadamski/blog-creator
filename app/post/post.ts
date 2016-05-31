import { Injectable } from '@angular/core';
import { Image, ImageService } from '../common/image';

export interface Post {
  title: string;
  body: string;
  images: Array<Image>;
  published: boolean;
}

@Injectable()
export class PostService {
  new(): void { }
  get(): Post { }
  save(): void { }
  publish(): boolean { }
  uploadImage(): boolean { }
}
