import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

@Component({
	standalone: true,
	imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
	template: `
		<ion-header>
			<ion-toolbar>
				<ion-title>27166</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<header class="main-header">
				<a href="https://github.com/ionic-team/ionic-framework/issues/27166">
					https://github.com/ionic-team/ionic-framework/issues/27166
				</a>
			</header>

			<ion-grid>
				<form>
					<ion-row>
						<ion-col size="6">
							<ion-row *ngFor="let c of count">
								<ion-col size="6">
									<ion-item>
										<ion-label position="stacked">Lastname {{ c }}</ion-label>
										<ion-input [name]="'lastname-' + c" type="text" placeholder="Insert" />
									</ion-item>
								</ion-col>

								<ion-col size="6">
									<ion-item>
										<ion-label position="stacked">Firstname {{ c }}</ion-label>
										<ion-input [name]="'firstname-' + c" type="text" placeholder="Insert" />
									</ion-item>
								</ion-col>
							</ion-row>
						</ion-col>

						<ion-col size="6">
							<ion-row>
								<ion-col size="12">
									<ion-item>
										<ion-label position="stacked">Email</ion-label>
										<ion-input name="email" type="text" placeholder="Insert" />
									</ion-item>
								</ion-col>
								<ion-col size="12">
									<ion-item>
										<ion-label position="stacked">Address</ion-label>
										<ion-input name="address" type="text" placeholder="Insert" />
									</ion-item>
								</ion-col>
							</ion-row>
						</ion-col>
					</ion-row>
				</form>
			</ion-grid>
		</ion-content>
	`,
})
export class Issue27166PageComponent {
	count = Array.from({ length: 10 }, (_, i) => i)
}
