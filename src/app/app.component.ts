import { Component, inject } from '@angular/core';
import { GlobalSignalStateService } from "./global-signal-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalSignalStateService = inject(GlobalSignalStateService)
}
