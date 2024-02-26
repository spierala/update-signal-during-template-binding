import { Component, inject } from '@angular/core';
import { GlobalSignalStateService } from "../global-signal-state.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  globalSignalStateService = inject(GlobalSignalStateService);

  constructor() {
    this.globalSignalStateService.increment()
  }
}
