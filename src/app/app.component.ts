import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'details';
}
