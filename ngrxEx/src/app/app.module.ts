import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // CounterOutputComponent,
    // CounterButtonsComponent,
    // CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,

    // PostsListComponent,
    // AddPostComponent,
    // EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
