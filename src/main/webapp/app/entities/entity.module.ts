import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OsnoreggatewayFileModule } from './file/file.module';
import { OsnoreggatewayLocationModule } from './location/location.module';
import { OsnoreggatewayOwnerModule } from './owner/owner.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OsnoreggatewayFileModule,
        OsnoreggatewayLocationModule,
        OsnoreggatewayOwnerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OsnoreggatewayEntityModule {}
