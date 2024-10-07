import { Routes } from "@angular/router";

import { HomeComponent } from "../../home/home.component";
import { TablesComponent } from "../../tables/tables.component";
import { UserComponent } from "../../user/user.component";

import { IconsComponent } from "../../icons/icons.component";
import { LoginComponent } from "../../login/login.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";

export const AdminLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },

  { path: "dashboard", component: HomeComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TablesComponent },

  { path: "icons", component: IconsComponent },

  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
];
