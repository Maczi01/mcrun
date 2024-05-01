import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';

@Component({
  selector: 'mcrun-landing-map-dropdown',
  templateUrl: './dropdown.html',
  standalone: true
})
export class DropdownComponent {
  @Input() items: string[] = [];
  @Input() label = '';
  isOpen = false;
  @Output() selectionChange = new EventEmitter<string>();

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: any): void {
    if (!event.target.closest('#dropdownDefaultButton') && this.isOpen) {
      this.isOpen = false;
    }
  }

  onSelectionChange(event: string): void {
    this.isOpen = false;
    this.selectionChange.emit(event);
  }
}
