import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


featuredProject = {} as Project;


constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Aditya Chavan - Home');
}
  ngOnInit(): void {
   this.featuredProject = this.projectsService.GetProjectById(0);
  }



}
