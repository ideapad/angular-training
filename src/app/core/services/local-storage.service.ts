import { Injectable } from '@angular/core';
import { Storage } from './storage.service';

@Injectable({
  providedIn: "root"
})
export class LocalStorageService implements Storage {
  constructor() { }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return localStorage.getItem(key)
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
  }
}
