import { Injectable } from "@angular/core";
import { Post }  from "./post.model"
import { Subject } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:'root'})

export class PostService{

    // injecting httpclient
    constructor(private http:HttpClient){}
    private postUpdated = new Subject<Post[]>() //genric
    private posts: Post[] = []
    postData: Post[] = []

    getPost()
    {
        this.http.get<{message: string, postData: Post[]}>('http://localhost:3000/api/posts/')
        .subscribe((data) => {
            this.postData = data.postData
            this.postUpdated.next([...this.postData])
        })
       // return[...this.posts]; //... Spread Operator(Basic Js) returning array (copied content) is posts
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title:string , content:string){

        const post: Post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post<{message: string, posts: Post[] }>('http://localhost:3000/api/posts/',post)
        .subscribe(data => {
            // console.log(data)
            this.postData.push(post)
            this.postUpdated.next(([...this.postData]));
        })
    }
}