import { Component } from '@angular/core';
import { IFeedback, ITeacher, IPhoto, ITechnology } from '../External files/info-files/infos.model';
import { feedbacks, teachers, photos, technologies } from '../External files/info-files/infos';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],

})
export class InformationComponent {
  teachers:ITeacher[];
  feeedbacks: IFeedback[];
  photos: IPhoto[];
  technologies: ITechnology[];
  logos: string[] = [
    '/logos/html5-144.png',
    '/logos/css3-144.png',
    '/logos/bootstrap-144.png',
    '/logos/javascript-144.png',
    '/logos/typescript-144.png',
    '/logos/angular-144.png',
    '/logos/git-144.png',
    '/logos/github-144.png',
    '/logos/mysql-144.png',
    '/logos/php-144.png',
    '/logos/symfony-144.png',
    '/logos/python-144.png',
  ];

  constructor() {
    this.teachers = teachers;
    this.feeedbacks = feedbacks;
    this.photos = photos;
    this. technologies = technologies;
  }

 
  get duplicatedLogos() {
    return [...this.logos, ...this.logos];
  }
}