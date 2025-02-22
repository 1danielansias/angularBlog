import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule], // Necesario importar FormsModule para el 2-way data binding
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  // Noticias iniciales
  arrayNoticias: INoticia[] = [
    {
      titulo: 'Primera noticia',
      img: 'https://mott.pe/noticias/wp-content/uploads/2016/01/perro-mono-1280x720.jpg',
      contenido: 'Este es el contenido de la primera noticia',
      fechaPublicacion: '2025-02-02',
    },
    {
      titulo: 'Segunda noticia',
      img: 'https://assets.puzzlefactory.com/puzzle/235/476/original.jpg',
      contenido: 'Este el el contenido de la segunda notica',
      fechaPublicacion: '2025-02-14',
    },
  ];

  nuevaNoticia: INoticia = {
    titulo: '',
    img: '',
    contenido: '',
    fechaPublicacion: '',
  };

  addNoticia() {
    // Comprobar datos de la nueva noticia
    if (
      !this.nuevaNoticia.titulo ||
      !this.nuevaNoticia.contenido ||
      !this.nuevaNoticia.fechaPublicacion ||
      !this.nuevaNoticia.img
    ) {
      alert('Por favor rellene todos los campos');
      return;
    }

    // Añadir noticia al array
    this.arrayNoticias.push({ ...this.nuevaNoticia });

    // Resetear
    this.nuevaNoticia = {
      titulo: '',
      img: '',
      contenido: '',
      fechaPublicacion: '',
    };
  }
}