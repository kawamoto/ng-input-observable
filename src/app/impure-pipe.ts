import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "impurePipe", pure: false })
export class ImpurePipe implements PipeTransform {
  transform(data: string) {
    console.log("ImpurePipe: transform");
    return data + ` ${Math.random()}`;
  }
}
