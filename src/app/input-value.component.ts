import {
  Component,
  DoCheck,
  ChangeDetectionStrategy,
  NgZone
} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-input-value",
  template: `
    <div>
      <h4>InputValue</h4>
      <button (click)="emitNewValue()">emitNewValue</button>
      <ng-container *ngIf="data$ | async as data">
        <app-input-value-child [data]="data"></app-input-value-child>
      </ng-container>
      <app-static trackName="static A-1"></app-static>
      <div>
        {{ data2 | impurePipe }}
      </div>
      <div>
        {{ data2 | purePipe }}
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputValueComponent implements DoCheck {
  data$ = new BehaviorSubject<number>(0);
  data2 = "data2";
  zone: NgZone;

  constructor(zone: NgZone) {
    this.zone = zone;
    zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.data$.next(this.data$.value + 10);
      }, 2000);
    });
  }

  ngDoCheck() {
    console.log("DoCheck: InputValue");
  }

  emitNewValue() {
    this.zone.runOutsideAngular(() => {
      this.data$.next(this.data$.value + 1);
    });
  }
}
