import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ComponentLibModule } from '@monorepo/my-component-lib';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';

@NgModule({
  declarations: [AppComponent, DashboardOverviewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ComponentLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
