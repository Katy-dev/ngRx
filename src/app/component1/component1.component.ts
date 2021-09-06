import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ExampleActions} from "../store/example.actions";


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  message: string = '';
  constructor( private store$: Store) {

  }

  ngOnInit(): void {
  }

  increaseCount() {
    this.store$.dispatch(ExampleActions.increaseCount());
  }

  sendMessage() {
    this.store$.dispatch(ExampleActions.sendMessage({ message: this.message }));
  }
}
