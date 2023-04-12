import { Component, EnvironmentInjector, inject } from "@angular/core"
import { RouterModule } from "@angular/router"
import { IonicModule } from "@ionic/angular"

@Component({
	selector: "app-tabs",
	standalone: true,
	imports: [IonicModule, RouterModule],
	styles: [
		`
			:host {
				display: contents;
			}
		`,
	],
	template: `
		<ion-tabs [environmentInjector]="environmentInjector">
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="issue-27166"> 27166 </ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	`,
})
export class TabsComponent {
	environmentInjector = inject(EnvironmentInjector)
}
