import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {Store} from '@ngrx/store'
import {decrement, increment, reset} from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number> = of(0);

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
    console.log("increment method has been called")
    this.count$.subscribe(
      value => console.log(value)
    )
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
