import {Directive, ElementRef, OnInit} from '@angular/core';

declare const Waypoint: any;

@Directive({
  selector: '[appWayPointDirective]'
})
export class WayPointDirectiveDirective implements OnInit{

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const waypoint = new Waypoint({
      element: this.elementRef.nativeElement,
      handler: () => {
        this.updateProgressBars();
        waypoint.destroy(); // Destroy the waypoint after it's triggered once
      },
      offset: '80%'
    });
  }

  updateProgressBars() {
    const progressBars = this.elementRef.nativeElement.querySelectorAll('.progress-bar');
    progressBars.forEach((progressBar: HTMLElement) => {
      progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
    });
  }

}
