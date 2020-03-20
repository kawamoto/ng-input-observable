import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <app-input-value></app-input-value>
      <app-static></app-static>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = "ng-input-observable";
}
