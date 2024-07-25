import { Component, DoCheck, OnInit } from '@angular/core';
import { courses } from '../External files/courses/courses';
import { ICourses } from '../External files/courses/courses.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, DoCheck {

  courses: ICourses[];
  course: ICourses = {} as ICourses;
  id: number = 0;

  constructor(private route: ActivatedRoute) {
    this.courses = courses;
  }

  ngOnInit(): void {
    console.log(courses[0].joke);
  }

  ngDoCheck(): void {
    this.id = +this.route.snapshot.params['id'];
    this.course = courses[this.id];
  }
}
