import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { TodolistComponent } from "./todolist/todolist.component";
import { HabitComponent } from "./habit/habit.component";
import { FloatingActionComponent } from "./floating-action/floating-action.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TodolistComponent,
    HabitComponent,
    FloatingActionComponent,
    NavigationComponent,
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
