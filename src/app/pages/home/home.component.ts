import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  photoCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';
  id: string | null = '0';

  smallCardTopPhotoCover: string = '';
  smallCardTopTitle: string = '';
  smallCardTopLink: string = '';

  smallCardMiddlePhotoCover: string = '';
  smallCardMiddleTitle: string = '';
  smallCardMiddleLink: string = '';

  smallCardBottomPhotoCover: string = '';
  smallCardBottomTitle: string = '';
  smallCardBottomLink: string = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.id = this.getRandomInt();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id == value.get('id'));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.cardDescription = result.description;
    this.cardTitle = result.title;
    this.photoCover = result.photo;

    const smallCardTopId = this.getRandomInt();
    const smallcardTop = dataFake.filter(
      (article) => article.id === smallCardTopId
    )[0];
    this.smallCardTopPhotoCover = smallcardTop.photo;
    this.smallCardTopTitle = smallcardTop.title;
    this.smallCardTopLink = smallcardTop.link;

    const smallCardMiddleId = this.getRandomInt();
    const smallCardMiddle = dataFake.filter(
      (article) => article.id === smallCardMiddleId
    )[0];
    this.smallCardMiddlePhotoCover = smallCardMiddle.photo;
    this.smallCardMiddleTitle = smallCardMiddle.title;
    this.smallCardMiddleLink = smallCardMiddle.link;

    const smallCardBottomId = this.getRandomInt();
    const smallcardBottom = dataFake.filter(
      (article) => article.id === smallCardBottomId
    )[0];
    this.smallCardBottomPhotoCover = smallcardBottom.photo;
    this.smallCardBottomTitle = smallcardBottom.title;
    this.smallCardBottomLink = smallcardBottom.link;
  }

  getRandomInt() {
    const min: number = 1;
    const max: number = 100;
    const result = Math.floor(Math.random() * (max - min) + min);
    return result.toString();
  }
}
