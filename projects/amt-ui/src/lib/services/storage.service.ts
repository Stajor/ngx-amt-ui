import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  isBrowser: boolean;
  prefix = 'amt';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  set(key: string, value: any): void {
    if (this.isBrowser) {
      localStorage.setItem(this.key(key), JSON.stringify(value));
    }
  }

  get(key: string): any {
    try {
      if (this.isBrowser) {
        return JSON.parse(localStorage.getItem(this.key(key)) || '');
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  remove(key: string): void {
    if (this.isBrowser) {
      return localStorage.removeItem(this.key(key));
    }
  }

  exists(key: string): boolean {
    return this.get(key) !== null;
  }

  private key(value: string) {
    return `${this.prefix}-${value}`;
  }
}
