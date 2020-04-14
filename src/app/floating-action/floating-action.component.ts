import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-floating-action",
  templateUrl: "./floating-action.component.html",
  styleUrls: ["./floating-action.component.scss"],
})
export class FloatingActionComponent {
  handset$: boolean = true;
  clicked = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.Small,
        Breakpoints.HandsetPortrait,
      ])
      .subscribe((result) => {
        if (result.matches) {
          this.handset$ = true;
          console.log(this.handset$);
        } else {
          this.handset$ = false;
          console.log(this.handset$);
        }
      });
  }

  ngOnInit() {}
}
