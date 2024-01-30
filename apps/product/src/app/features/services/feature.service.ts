// apps/product/src/app/services/remote.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private data = 'Initial data';

  getData(): string {
    return this.data;
  }

  updateData(newData: string): void {
    this.data = newData;
  }
}
