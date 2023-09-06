import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(key: string, data: string): Promise<any> {
    return new Promise((resolve) => {
      localStorage.setItem(key, data);
      resolve(key);
    });
  }

  get(key: string): Promise<any> {
    return new Promise((resolve) => {
      const v = localStorage.getItem(key);
      resolve(v);
    });
  }
}
