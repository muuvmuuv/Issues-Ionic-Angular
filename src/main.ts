import "zone.js";

import { enableProdMode } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { provideRouter } from "@angular/router";
import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { TabsComponent } from "./app/tabs.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: "",
        component: TabsComponent,
        children: [
          {
            path: "issue-27166",
            loadComponent: () =>
              import("./app/issues/issue-27166.component").then(
                (c) => c.Issue27166PageComponent
              ),
          },
        ],
      },
    ]),
    importProvidersFrom(
      IonicModule.forRoot({
        mode: "ios",
      })
    ),
  ],
}).catch((err) => console.log(err));
