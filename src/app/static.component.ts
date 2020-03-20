import {
  Component,
  DoCheck,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-static",
  template: `
    <div>
      <h4>static</h4>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticComponent implements DoCheck {
  @Input() trackName: string;
  ngDoCheck() {
    console.log(`DoCheck: Static: ${this.trackName}`);
  }
}
