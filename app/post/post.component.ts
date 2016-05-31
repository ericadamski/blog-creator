import { Component, OnInit } from '@angular/core';
import { Post, PostService } from './post';

@Component({
  selector: 'post',
  template: requrie('./post.component.html'),
  styles: [require('./post.component.css')],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  ngOnInit() { }
}
