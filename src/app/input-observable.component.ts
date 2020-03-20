import {
  Component,
  DoCheck,
  ChangeDetectionStrategy,
  NgZone
} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-input-observable",
  template: `
    <div>
      <h4>InputObservable</h4>
      <button (click)="emitNewValue()">emitNewValue</button>
      <app-input-observable-child [data$]="data$"></app-input-observable-child>
      <app-static trackName="static B-1"></app-static>
      <div>
        {{ data2 | impurePipe }}
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputObservableComponent implements DoCheck {
  data$ = new BehaviorSubject<number>(0);
  data2 = "data2";
  zone: NgZone;

  constructor(zone: NgZone) {
    this.zone = zone;
    zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.data$.next(this.data$.value + 10);
      }, 3000);
    });
  }
  ngDoCheck() {
    console.log("DoCheck: InputObservable");
  }

  emitNewValue() {
    this.zone.runOutsideAngular(() => {
      this.data$.next(this.data$.value + 1);
    });
  }
}
