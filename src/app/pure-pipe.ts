import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "purePipe", pure: true })
export class PurePipe implements PipeTransform {
  transform(data: number) {
    console.log("PurePipe: transform");
    return data * 2;
  }
}
