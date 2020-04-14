import { Component, OnInit } from "@angular/core";
import { ApibackendService } from "../apibackend.service";
import { Habit } from "../todolist-interface";
import { Observable } from "rxjs";

@Component({
  selector: "app-habit",
  templateUrl: "./habit.component.html",
  styleUrls: ["./habit.component.scss"],
})
export class HabitComponent implements OnInit {
  habit$: Observable<Habit[]>;

  constructor(private apicalls: ApibackendService) {}

  ngOnInit(): void {
    this.getHabit();
  }

  public getHabit() {
    this.habit$ = this.apicalls.getHabit();
  }
}
