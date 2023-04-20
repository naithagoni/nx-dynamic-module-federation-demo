import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentLibModule {}
