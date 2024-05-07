import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Datepicker from 'flowbite-datepicker/Datepicker';

@Component({
  standalone: true,
  selector: 'mc-run-landing-app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent implements AfterViewInit {
  @ViewChild('datepicker') datepickerElement: ElementRef;

  ngAfterViewInit() {
    new Datepicker(this.datepickerElement.nativeElement, {
      // options here
    });
  }
}
