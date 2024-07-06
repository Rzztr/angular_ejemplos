import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-ejemplo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-ejemplo.component.html',
  styleUrl: './pagina-ejemplo.component.scss'
})
export class PaginaEjemploComponent {
  lenjuages=[
    'python',
    'java', 
    'R',
    'HTML, CSS',
    'angular',
    'ionic', 
    'git',
    'MySql',
    'MongoDB'
  ];

}
