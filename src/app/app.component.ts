import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaginaEjemploComponent } from "./pagina-ejemplo/pagina-ejemplo.component";
import { ExperienciaService } from './experiencia.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, PaginaEjemploComponent]
})
  export class AppComponent implements OnInit{

    exp :any;
    
    constructor(private experienciaServicio: ExperienciaService) {
    }
    
    ngOnInit() {
      this.exp=this.experienciaServicio.retornar();
    }

  title = 'proyectoEjemplo';
}
