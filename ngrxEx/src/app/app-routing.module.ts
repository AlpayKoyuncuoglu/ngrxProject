import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  // {
  //   path: 'counter', component: CounterComponent
  // },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  // {
  //   path: 'posts', component: PostsListComponent,
  //   children: [
  //     { path: 'add', component: AddPostComponent },
  //     {
  //       path: 'edit/:id',
  //       component: EditPostComponent
  //     }
  //   ]
  // }
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
