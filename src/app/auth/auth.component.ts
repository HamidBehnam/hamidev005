import {Component, OnInit, ViewChild} from '@angular/core';
import {LogoInformationDirective} from '../shared/utils/directives/logo-information.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // this way we can programmatically access the Directive
  @ViewChild('logoInformation') logoInformation: LogoInformationDirective;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.logoInformation.printInformation();
    }, 5000);
  }

  uiProcessorFinished(event) {
    console.log('long-running UI processor finished: ', event);
  }
}
