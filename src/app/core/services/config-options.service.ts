import { Injectable } from '@angular/core';
import { ConfigOptions } from '../models/config-options.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  set(options: ConfigOptions) {
    this.configOptions = options;
  }

  get(): ConfigOptions {
    return this.configOptions;
  }

  update(options: any) {
    this.configOptions = { ...this.configOptions, ...options } 
  }
}
