import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
import Project from "../../models/Project";
import {addCommandModuleToYargs} from "@angular/cli/src/command-builder/utilities/command";

@Component({
  selector: 'app-experience-summary',
  templateUrl: './experience-summary.component.html',
  styleUrls: ['./experience-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceSummaryComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
      this.projects = this.projectsService.getProjects()
  }

  getExperienceYears(): number {
    // let date = new Date();
    // if (this.projects) {
    //   this.projects.forEach(project => {
    //     let projectDate = new Date(project.startDate);
    //     if (projectDate < date) {
    //       date = projectDate;
    //     }
    //   });
    // }
    // return new Date().getFullYear() - date.getFullYear();
    return 3
  }

  getCompletedProjectsCount(): number {
    // if (this.projects) {
    //   return this.projects.filter(project => project.status === 'Finished').length;
    // }
    return 12;
  }

  getPersonalProjectsCount(): number {
    // if (this.projects) {
    //   let customers = new Set();
    //   this.projects.forEach(project => {
    //     customers.add(project.client);
    //   });
    //   return customers.size;
    // }
    return 4;
  }

  getProjectInProgressCount(): number {
    // if (this.projects) {
    //   return this.projects.filter(project => project.status === 'In Progress').length;
    // }
    return 2;
  }
}
