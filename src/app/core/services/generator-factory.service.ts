import { Injectable } from '@angular/core';
import { GeneratorService } from './generator';

@Injectable({
  providedIn: 'root',
  useFactory: (generator: GeneratorService) => new GeneratorFactoryService(generator, Math.floor(Math.random() * 100)),
  deps: [GeneratorService]
})
export class GeneratorFactoryService {
  private generatedString;

  constructor(generator: GeneratorService, n: number) {
      this.generatedString = generator.get(n);
   }

   get(): string { 
     return this.generatedString; 
    }
}
