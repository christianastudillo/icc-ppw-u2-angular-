import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-layouts-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './layouts-page.html',
})
export class LayoutsPage {}