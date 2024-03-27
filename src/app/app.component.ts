import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_1';
}
