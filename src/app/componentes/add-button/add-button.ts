import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-button',
  imports: [RouterLink],
  templateUrl: './add-button.html',
  styleUrl: './add-button.css',
})
export class AddButton {
  title = input.required<string>();
  link = input<string>('/');
}
