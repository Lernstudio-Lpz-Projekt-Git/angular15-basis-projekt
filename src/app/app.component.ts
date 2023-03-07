import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15-basis-projekt';

  showParentFrame(): void {
    console.log("Ausgabe des Parent-App-Componente!");
  }
}
