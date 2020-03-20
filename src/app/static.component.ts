import { Component, DoCheck, Input } from "@angular/core";

@Component({
  selector: "app-static",
  template: `
    <div>
      <h4>static</h4>
    </div>
  `,
  styles: []
})
export class StaticComponent implements DoCheck {
  @Input() trackName: string;
  ngDoCheck() {
    console.log(`DoCheck: Static: ${this.trackName}`);
  }
}
