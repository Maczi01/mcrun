import {Component, HostListener, Input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'mcrun-landing-map-dropdown',
    templateUrl: './dropdown.html',
})
export class DropdownComponent {

  @Input() items: string[] = []; // Dropdown items
  @Input() label = ''; // Dropdown label

  isOpen = false; // Dropdown state

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: any): void {
    if (!event.target.closest('#dropdownDefaultButton') && this.isOpen) {
      this.isOpen = false;
    }
  }
}
