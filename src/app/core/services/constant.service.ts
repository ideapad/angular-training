import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue : {
    get() {
      return { App: "TaslManager", Ver: '1.0' }
    }
  }
})
export class ConstantService {

  constructor() { }
}
