import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MenubarModule,
		ConfirmDialogModule
	],
	providers: [
		ConfirmationService
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	constructor(
		private confirmationService: ConfirmationService
	) {
		window.addEventListener("beforeinstallprompt", this.onBeforeInstallprompt.bind(this));
	}

	private onBeforeInstallprompt(event: any) {

		event.preventDefault();

		this.confirmationService.confirm({
            header: 'Installation',
            message: 'This application is available for installation on your device. Would you like to install it?',
			acceptLabel: 'Install',
			rejectLabel: 'Dismiss',
			rejectIcon: 'pi',
			acceptIcon: 'pi',
			acceptButtonStyleClass: 'p-button-outlined',
			rejectButtonStyleClass: 'p-button-outlined',
            accept: () => {
				event.prompt();
            },
            reject: () => {
            }
        });
	}

	items: MenuItem[] = [
		{
			label: 'Events',
			icon: 'pi pi-calendar',
			route: '/event'
		}
	];
}
