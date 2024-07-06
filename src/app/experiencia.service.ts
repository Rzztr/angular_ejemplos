import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor() { }

  retornar(){
    return [
      {
        titulo: "HAckaton smartSecurity",
        anio: 2023
      },
      {
        titulo: "foro interncaional de seguridad C5i",
        anio: 2024
      },
      {
        titulo: "desarrollo de paginas web",
        anio: 2023
      }
    ]
  }
}
