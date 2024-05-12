import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


// Declare Typed.js
declare var Typed: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('typedTextOutput') typedTextOutput!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    if (this.typedTextOutput.nativeElement) {
      var typed_strings = this.typedTextOutput.nativeElement.nextElementSibling.innerText;
      var typed = new Typed(this.typedTextOutput.nativeElement, {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
      });
    }
  }

}
