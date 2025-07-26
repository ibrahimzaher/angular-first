import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderContent } from '../../shared/components/header-content/header-content';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, HeaderContent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPassword: string = '';
  submit(event: Event) {}
}
