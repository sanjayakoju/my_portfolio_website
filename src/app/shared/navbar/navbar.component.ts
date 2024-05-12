import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isNavbarVisible = false;
  activeSectionId: string | null = null;

  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'qualification', name: 'Quality' },
    { id: 'skill', name: 'Skill' },
    { id: 'service', name: 'Project' },
    { id: 'blog', name: 'Blog' },
    { id: 'contact', name: 'Contact' }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.isNavbarVisible = window.scrollY > 200;
    this.detectActiveSection();
  }

  smoothScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }


  private detectActiveSection() {
    const scrollPosition = window.scrollY;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSectionId = section.id;
          return;
        }
      }
    }

    // If no section is active, set activeSectionId to null
    this.activeSectionId = null;
  }

}
