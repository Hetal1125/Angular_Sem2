import { Component } from '@angular/core';
import {Post} from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  postCreated = []
  onPostAdded(post: Post){
    this.postCreated.push(post);
    // console.log(this.postCreated);
  }
}
