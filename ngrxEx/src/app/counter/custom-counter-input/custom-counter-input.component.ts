import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;
  channelName: string;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      //burada data.counter yazmak istediğimde tip güvenli çalışma sayesinde hata verdi.
      this.channelName = data.channelName;
      //bu logun eklenmesinin sebebi selector kullanılmamasının dezavantajını görmektir
      console.log("channel name observable called")
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }))
    console.log(this.value);
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }


}
