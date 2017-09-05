import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {aboutLazyRoute, navbarRoute} from '../app.route';
import {errorRoute} from './';

const LAYOUT_ROUTES = [
    navbarRoute,
    aboutLazyRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}
