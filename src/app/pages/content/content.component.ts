import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent implements OnInit {
  contentPhotoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  contentLink: string = '';

  contentId: string | null = '0';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.contentId = value.get('id'))
    );
    this.setValuesToComponent(this.contentId);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((article) => article.id.toString() == id)[0];

    this.contentDescription = result.description;
    this.contentTitle = result.title;
    this.contentPhotoCover = result.photo;
    this.contentLink = result.link;
  }

  getRandomInt() {
    const min: number = 1;
    const max: number = 100;
    return Math.floor(Math.random() * (max - min) + min);
  }
}
