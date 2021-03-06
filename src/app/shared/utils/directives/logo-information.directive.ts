import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appLogoInformation]',
  exportAs: 'appLogoInformation'
})
export class LogoInformationDirective {
  @Input() appLogoInformation: string;
  @Input() additionalInformation: string;
  @Output() processorFinished: EventEmitter<boolean>;

  constructor(private elementRef: ElementRef) {
    this.processorFinished = new EventEmitter<boolean>();
  }

  @HostListener('click') printInformation(): void {
    console.log(`Element: `, this.elementRef);
    console.log(`${this.appLogoInformation}, ${this.additionalInformation}`);
    this.longRunningProcessor();
  }

  // this is to mimic a long running UI processor.
  longRunningProcessor() {
    setTimeout(() => {
      this.processorFinished.emit(true);
    }, 10000);
  }
}
