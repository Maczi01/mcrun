import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header', // Selektor, który używasz do umieszczania komponentu w szablonie HTML.
  templateUrl: './header.component.html', // Ścieżka do pliku szablonu HTML dla tego komponentu.
})
export class HeaderComponent {
  title = 'McRun';

  constructor() {
    // Konstruktor dla inicjalizacji komponentu.
  }

  // Możesz dodać metody, które będą obsługiwać różne zdarzenia, np. kliknięcie przycisku w nagłówku.
  onMenuClick() {
    console.log('Menu clicked');
  }
}
