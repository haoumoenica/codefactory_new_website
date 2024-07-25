import { AfterViewInit, Component } from '@angular/core';
import { ICourses, IThemes } from '../External files/courses/courses.model';
import { courses, themes } from '../External files/courses/courses';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {

  theme: IThemes = {} as IThemes;
  themes: IThemes[] = themes;

  courses: ICourses[];
  id: number[];

  constructor() {
    this.courses = courses;
    this.id = [21, 22, 23, 24, 25, 26, 27];
  }

  ngAfterViewInit(): void {
    let videoContainer = document.getElementById('hero-video') as HTMLIFrameElement;

    if (videoContainer) {
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log('Intersection entry:', entry);
          if (entry.isIntersecting) {
            let iframe = entry.target as HTMLIFrameElement;
            console.log('Iframe is intersecting:', iframe);
            let src = iframe.src;
            if (!src.includes('autoplay=1')) {
              iframe.src = src.replace('autoplay=0', 'autoplay=1');
              console.log('Autoplay enabled:', iframe.src);
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });

      observer.observe(videoContainer);
    }
  }

  scrollToTheme(themeId: number): void {
    const element = document.getElementById(`theme-${themeId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
