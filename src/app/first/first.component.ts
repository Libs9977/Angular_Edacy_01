import { Component } from '@angular/core';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponentComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
