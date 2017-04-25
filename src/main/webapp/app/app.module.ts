import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { OsnoreggatewaySharedModule, UserRouteAccessService } from './shared';
import { OsnoreggatewayHomeModule } from './home/home.module';
import { OsnoreggatewayAdminModule } from './admin/admin.module';
import { OsnoreggatewayAccountModule } from './account/account.module';
import { OsnoreggatewayEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        OsnoreggatewaySharedModule,
        OsnoreggatewayHomeModule,
        OsnoreggatewayAdminModule,
        OsnoreggatewayAccountModule,
        OsnoreggatewayEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class OsnoreggatewayAppModule {}
