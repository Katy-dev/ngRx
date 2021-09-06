import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {ExampleService} from "../example.servise";
import {ExampleActions} from "./example.actions";

@Injectable()
export class ExampleEffects {

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExampleActions.getData),
      mergeMap(() => this.exampleService.getAll()
        .pipe(
          map(data => {
            return ExampleActions.getDataSuccess({data: data})
          }
        )
      )
    )
  )
  )

  constructor(
    private actions$: Actions,
    private exampleService: ExampleService) {}
}
