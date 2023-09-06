import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent {
  photoCover: string =
    'https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular.png';
  contentTitle: string = 'Meu Conteúdo';
  contentDescription: string = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deserunt
  repellendus distinctio, sit error ipsa deleniti voluptates saepe sint
  excepturi laboriosam sapiente explicabo quod accusamus magni ea dolore nam
  doloremque.`;
}
