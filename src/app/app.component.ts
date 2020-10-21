import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <div>this sample application is for investigate how change detection works with input observable</div>
      <app-input-value></app-input-value>
      <app-input-observable></app-input-observable>
      <app-static trackName="static C"></app-static>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "ng-input-observable";
  ngDoCheck() {
    console.log("DoCheck: App");
  }
}
