import { Component, Input, OnInit } from "@angular/core";
import {Post} from '../post.model';
import { PostService } from "../post.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{  //lifecycle hook

    // posts = [
        //     {title: "first",content: 'First content'},
        //     {title: "second",content:'second Content'},
        //     {title: "third",content:'third Content'}
        // ];
        // posts=[];
        // @Input() posts: Post[] = [];
        // console.log(post);
        
        private postSub: Subscription;
        posts: Post[] =[];
        constructor(public postService: PostService){}


        ngOnInit(){

            this.postService.getPost()
            this.postSub = this.postService.getPostUpdateListener().subscribe((allPosts: Post[]) => {
                this.posts = allPosts;
            })
        
        }

} 