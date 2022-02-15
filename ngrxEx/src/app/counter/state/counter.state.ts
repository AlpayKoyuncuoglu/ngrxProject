export interface CounterState {
  counter: number;
  channelName: string
}

// Burada tanımlanan interface ile refactoring yapılmıştır
// bu sayede constructor içine tanımlanan counter:number yerine CounterState ifadesi geçmiştir; önceki: constructor(private store: Store<{ counter: { counter: number } }>) { }

//burada interface'den kalıtım alındı
export const initialState: CounterState = {
  counter: 0,
  channelName: 'Leela Web Dev',
}
