import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginPageComponent } from "./users/login-page/login-page.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { HabitComponent } from "./habit/habit.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "todolist", component: TodolistComponent },
  { path: "habit", component: HabitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomepageComponent,
  LoginPageComponent,
  HabitComponent,
];
