import { Injectable, signal } from '@angular/core';

export interface ApiErrorState {
  status: number;
  message: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ApiErrorService {
  readonly error = signal<ApiErrorState | null>(null);

  report(error: ApiErrorState): void {
    this.error.set(error);
  }

  clear(): void {
    this.error.set(null);
  }
}
