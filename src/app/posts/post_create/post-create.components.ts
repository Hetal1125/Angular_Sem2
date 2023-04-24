import { Component, EventEmitter,Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { PostService } from "../post.service";



@Component({
    selector: "app-post-create",
    templateUrl:"./post-create.component.html",
    styleUrls:["./post-create.component.css"]
})

export class PostCreateComponent
{
    // newPost:string ="No content";
    // enteredValue:string = "";
    // addPost(){
    //     // this.newPost= "User\s Post"
    //     // console.dir(postInput.value);
    //     this.newPost = this.enteredValue;
    // }

    title: string = '';
    content: string = '';

//     @Output() postCreated = new EventEmitter<Post>(); // <> genric bolte hain object ke sath data type pass <Post>
//     addPost(postForm: NgForm)
//     {
//         if(postForm.invalid){return;}
        
// // post is varaible {it's a object}

//         const post: Post = {
//             title : postForm.value.title,
//             content : postForm.value.content
//         }
        
//         this.postCreated.emit(post); 

//         // console.log(post); // for dekhne ke liye
        
//     }
X   
    constructor(public postService: PostService){}

    addPost(postForm: NgForm){
        if(postForm.invalid){return;}
        this.postService.addPost(postForm.value.title,postForm.value.content)
        postForm.resetForm(); // form reset 
    }

}