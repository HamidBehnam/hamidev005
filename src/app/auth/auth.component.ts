import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LogoInformationDirective} from '../shared/utils/directives/logo-information.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  // this way we can programmatically access the Directive
  @ViewChild('logoInformation') logoInformation: LogoInformationDirective;

  constructor() { }

  ngOnInit() {
  }

  onProcessorFinished(event) {
    console.log('long-running UI processor finished: ', event);
  }

  ngAfterViewInit(): void {
    this.logoInformation.printInformation();
  }
}
