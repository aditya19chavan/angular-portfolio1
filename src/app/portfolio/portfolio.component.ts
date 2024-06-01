import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed = true;



  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Aditya Chavan - Portfolio');
}
ngOnInit():void {
  this.projects = this.projectService.GetProjects();
}
}