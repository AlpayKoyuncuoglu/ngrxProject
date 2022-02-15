import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: number;
  counter$: Observable<{ counter: number }>;

  // constructor(private store: Store<{ counter: { counter: number } }>) { }
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    //subscribe olarak data içindeki counter değeri alınır ya da store select ile observable olarak da alınabilir. Bu durumda html içinde {{ (counter$ | async).counter }} ile gösterim sağlanır
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
      console.log("counter observable called");
    })

    this.counter$ = this.store.select('counter');
  }


}
