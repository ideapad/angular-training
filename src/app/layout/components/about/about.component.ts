import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from 'src/app/core/services/constant.service';
import { ConfigOptions } from 'src/app/core/models/config-options.model';
import { GeneratorFactoryService } from 'src/app/core/services/generator-factory.service';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorage: LocalStorageService, 
    @Optional() private options: ConfigOptionsService, 
    @Optional() private constant: ConstantService, 
    @Optional() private generator: GeneratorFactoryService) { }

  ngOnInit() {
    this.localStorage.setItem('someKey', 'myValue');
    console.log(this.localStorage.getItem('someKey'));

    this.options.set(new ConfigOptions(1, 'myLogin', 'myEmail'));
    this.options.update({id: 2} as ConfigOptions);
    console.log(this.options.get());

    console.log(this.constant);

    console.log(this.generator.get());
  }

}
