import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSignalStateService {
  private _state= signal({count: 1});
  state = this._state.asReadonly();

  increment() {
    this._state.update(state => ({...state, count: state.count + 1}))
  }
}
