import { Injectable } from '@angular/core';

export interface NavigationItem {
    id: string;
    title: string;
    type: 'item' | 'collapse' | 'group';
    translate?: string;
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    exactMatch?: boolean;
    external?: boolean;
    target?: boolean;
    breadcrumbs?: boolean;
    function?: any;
    badge?: {
        title?: string;
        type?: string;
    };
    children?: Navigation[];
}

export interface Navigation extends NavigationItem {
    children?: NavigationItem[];
}

const NavigationItems = [
    {
        id: 'admin',
        title: 'Admin',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [
            {
                id: 'home-page',
                title: 'Home',
                type: 'item',
                url: '/home-page',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
            }
        ]
    }
];

@Injectable()
export class NavigationItem {
    public get() {
        return NavigationItems;
    }
}
