import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent {
  isHandset$: Observable<boolean> = this.bpo
    .observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      // result matches returns a boolean value of yes or no. this value will be tracked
      shareReplay()
    );

  constructor(public bpo: BreakpointObserver) {}
}
