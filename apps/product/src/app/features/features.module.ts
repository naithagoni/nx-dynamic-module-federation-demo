import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentLibModule } from '@monorepo/my-component-lib';

import { featuresRoutes } from './features.routes';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

@NgModule({
  declarations: [ProductOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featuresRoutes),
    ComponentLibModule,
  ],
  providers: [],
})
export class FeaturesModule {}
