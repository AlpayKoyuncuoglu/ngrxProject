import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: number;
  //counter$: Observable<{ counter: number }>;
  counter$: Observable<number>

  // constructor(private store: Store<{ counter: { counter: number } }>) { }
  // constructor(private store: Store<{ counter: CounterState }>) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //subscribe olarak data içindeki counter değeri alınır ya da store select ile observable olarak da alınabilir. Bu durumda html içinde {{ (counter$ | async).counter }} ile gösterim sağlanır
    // this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    //   console.log("counter observable called");
    // })
    this.store.select(getCounter).subscribe(counter => {
      this.counter = counter;
    })

    // this.counter$ = this.store.select('counter');

    this.counter$ = this.store.select(getCounter)

  }


}
