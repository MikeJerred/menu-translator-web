import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebEnvironment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Environment } from '@menu-translator/shared/environments/environment';
import { SharedModule } from '@menu-translator/shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,

        SharedModule,

        AppRoutingModule
    ],
    providers: [
        { provide: Environment, useExisting: WebEnvironment }
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
