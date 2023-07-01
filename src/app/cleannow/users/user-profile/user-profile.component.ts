import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IAlbum, IEvent, LIGHTBOX_EVENT, Lightbox, LightboxConfig, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    public activeTab: string;

    public editProfile: boolean;
    public editProfileIcon: string;

    public editContact: boolean;
    public editContactIcon: string;

    public editOtherInfo: boolean;
    public editOtherInfoIcon: string;

    public albums: Array<IAlbum>;
    private subscription: Subscription;

    public transacciones: any[] = [
        {
            fecha: '2023-07-01',
            detalle: 'Pago de servicio',
            monto: '100.00'
        },
        {
            fecha: '2023-07-02',
            detalle: 'Compra de producto',
            monto: '200.00'
        },
        {
            fecha: '2023-07-01',
            detalle: 'Compra de producto',
            monto: '250.00'
        },
    ];

    constructor(
        private lightbox: Lightbox,
        private lightboxEvent: LightboxEvent,
        private lighboxConfig: LightboxConfig,
        private sanitizer: DomSanitizer
    ) {
        this.activeTab = 'profile';

        this.editProfile = false;
        this.editProfileIcon = 'icon-edit';

        this.editContact = false;
        this.editContactIcon = 'icon-edit';

        this.editOtherInfo = false;
        this.editOtherInfoIcon = 'icon-edit';

        this.albums = [];
        for (let i = 1; i <= 6; i++) {
            const album = {
                src: 'assets/images/light-box/l' + i + '.jpg',
                caption: 'Image ' + i + ' caption here',
                thumb: 'assets/images/light-box/sl' + i + '.jpg'
            };

            this.albums.push(album);
        }
        lighboxConfig.fadeDuration = 1;
    }

    ngOnInit() {}

    public getSantizeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    open(index: number): void {
        this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));
        this.lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
    }

    private _onReceivedEvent(event: IEvent): void {
        if (event.id === LIGHTBOX_EVENT.CLOSE) {
            this.subscription.unsubscribe();
        }
    }
}
