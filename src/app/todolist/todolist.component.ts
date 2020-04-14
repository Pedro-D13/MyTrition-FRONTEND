import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ApibackendService } from "../apibackend.service";
import { TodoList, Items } from "../todolist-interface";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"],
})
export class TodolistComponent implements OnInit {
  todolist$: Observable<TodoList[]>;
  items$: Observable<Items[]>;
  item_form: FormGroup;
  len_todolist: TodoList[];
  tdlCount: Observable<TodoList[]>;
  constructor(
    private apicalls: ApibackendService,
    private form_builder: FormBuilder
  ) {}

  ngOnInit() {
    this.getList();
    this.getItems();
    this.buildForm();
  }

  public buildForm() {
    this.item_form = this.form_builder.group({
      todolist: null,
      item: "",
      notes: "",
    });
  }

  public getList() {
    this.todolist$ = this.apicalls.getList();
  }

  public getItems() {
    this.items$ = this.apicalls.getItems();
  }

  public itemDelete(item_id: number) {
    this.apicalls.itemDelete(item_id).subscribe((response) => {
      console.log(response);
      this.getItems();
    });
  }

  itemUpdate(item: Items) {
    this.apicalls.itemUpdate(item).subscribe((response) => {
      console.log(response);
      this.getItems();
    });
  }
  onSubmit() {
    // Create the item
    this.apicalls.itemCreate(this.item_form.value).subscribe((response) => {
      console.log(response);
      this.getItems();
    });
  }
}
