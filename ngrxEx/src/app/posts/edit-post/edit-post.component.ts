import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data;
        this.createForm()
      })
      console.log(params);
    })
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6)
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

}
