import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SharedModule } from "../shared/shared.module";
import { AppModule } from "../app.module";

const modules = [CommonModule, SharedModule];

const components = [AppModule];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class UsersModule {}
