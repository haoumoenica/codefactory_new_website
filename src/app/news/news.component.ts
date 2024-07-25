import { Component } from '@angular/core';
import { Icompanies, Icourse, Ievent } from '../External files/news-files/news.model';
import { companies, courses, events } from '../External files/news-files/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  course: Icourse = {} as Icourse;
  courses: Icourse[] = courses;
  event: Ievent = {} as Ievent;
  events: Ievent[] = events;
  company: Icompanies = {} as Icompanies;
  companies: Icompanies[] = companies;

  id: number[];

  constructor() {
    this.id = [28, 29];
  }
}
