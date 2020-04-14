import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ShellComponent } from "./shell/shell.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { IonicModule } from "@ionic/angular";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { RouterModule } from "@angular/router";

// You are required to manually update this components module, when a new component needs to be shared.
const componets = [ShellComponent];

const modules = [
  IonicModule,
  MatButtonModule,
  CommonModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  RouterModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [...componets, ShellComponent],
  imports: [...modules],
  exports: [...componets, ...modules],
})
export class SharedModule {}
