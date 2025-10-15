import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // ← esto es obligatorio
  templateUrl: './header.html'
})
export class HeaderComponent {}




