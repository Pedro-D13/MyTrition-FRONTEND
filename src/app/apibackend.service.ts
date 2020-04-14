import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoList, Items, Habit } from "./todolist-interface";

@Injectable({
  providedIn: "root",
})
export class ApibackendService {
  API_URL = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

  public getList(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(`${this.API_URL}/todolist`);
  }
  public getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(`${this.API_URL}/items`);
  }
  public itemCreate(new_item: Items) {
    return this.http.post<Items[]>(`${this.API_URL}/items/`, new_item);
  }

  public getHabit(): Observable<Habit[]> {
    return this.http.get<Habit[]>(`${this.API_URL}/habit`);
  }

  public itemDelete(item_id: number) {
    return this.http.delete(`${this.API_URL}/items/${item_id}/`);
  }
  public itemUpdate(item: Items) {
    return this.http.put(`${this.API_URL}/items/${item.id}/`, item);
  }

  public habitCreate() {}
  public habitDelte() {}
  public habitUpdate() {}
}
