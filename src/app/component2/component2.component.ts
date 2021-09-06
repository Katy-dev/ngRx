import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ExampleSelectors} from "../store/example.selectors";
import {ExampleActions} from "../store/example.actions";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  count$: Observable<number>;
  message$: Observable<string | undefined>;
  dataLoading$: Observable<boolean>;

  constructor(private store$: Store) {
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.dataLoading$ = this.store$.select(ExampleSelectors.dataLoading);
  }

  getData() {
   this.store$.dispatch(ExampleActions.getData());
  }

  ngOnInit(): void {
    this.store$.select(ExampleSelectors.allData).subscribe((data) =>
    {
      console.log(data);
    });
  }


}
