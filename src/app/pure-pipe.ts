import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "purePipe", pure: true })
export class PurePipe implements PipeTransform {
  transform(data: string) {
    console.log("purePipe: transform");
    return data + ` : pure`;
  }
}
