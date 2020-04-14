import { Component } from "@angular/core";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent {
  handset$: boolean = true;
  clicked = false;
  quotes = [
    "why or why",
    "you got this",
    "not for you user, but for the developer, dude you gotta set up an api call or something to a database full of quotes",
  ];
  quote: string;
  public openQuotes() {
    this.clicked = !this.clicked;
    this.quote = "Well done you clicked a button, now go get somework done";
  }

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
