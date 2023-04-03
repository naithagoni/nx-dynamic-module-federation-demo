import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentLibModule } from '@monorepo/my-component-lib';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    ComponentLibModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
