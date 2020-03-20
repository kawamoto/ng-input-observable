import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "purePipe", pure: true })
export class PurePipe implements PipeTransform {
  transform(data: number) {
    return data * 2;
  }
}
