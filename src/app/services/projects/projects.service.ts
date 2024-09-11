import {Injectable} from '@angular/core';
import Project from "../../models/Project";
import {HttpClient} from "@angular/common/http";
import Location from "../../models/Location";
import Technology from "../../models/Technology";
import ProjectLink from "../../models/ProjectLink";
import {environment} from "../../../environments/environment.prod";
import {Observable, share} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] | undefined;

  constructor(private http: HttpClient) {
  }

  getProjects(): Project[] {
    // let apiUrl = environment.apiUrl;
    // if (!this.projects) {
    //   this.projects = this.http.get<Project[]>(apiUrl + '/projects').pipe(share());
    // }
    this.projects = [
      new Project(
        'Social Media App',
        'Designed with Angular and FirebaseTS, this basic social media web app allows users to effortlessly create accounts, login securely, and recover forgotten passwords through a dedicated component. Users can seamlessly post images, text, or a combination of both, while fostering interaction through features such as comments and likes.',
        'Completed',
        'Web Development',
        new Date('2022-06-15T00:00:00.000Z'),
        new Date('2023-07-15T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Personal Project',
        [
          new Technology('Angular'),
          new Technology('FirebaseTS'),
        ],
        [
          new ProjectLink('GitHub', 'https://github.com/Sarthak1009/SocialApp', 'Code Repository'),
          new ProjectLink('Live Link', 'https://sarthak1009.github.io/SocialApp/', 'Deployment'),
          new ProjectLink('SocialApp', '/assets/img/SocialApp_01.png', 'Image'),
          new ProjectLink('SocialApp', '/assets/img/SocialApp_02.png', 'Image'),
          new ProjectLink('SocialApp', '/assets/img/SocialApp_03.png', 'Image'),
          new ProjectLink('SocialApp', '/assets/img/SocialApp_04.png', 'Image'),
        ]
      ),
      new Project(
        'Portfolio Demo',
        'This is a demo portfolio website created using Angular.',
        'Completed',
        'FrontEnd - Angular',
        new Date('2022-06-08T00:00:00.000Z'),
        new Date('2022-06-15T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Personal Project',
        [
          new Technology('Angular'),
          new Technology('HTML, CSS'),
        ],
        [
          new ProjectLink('Github', 'https://github.com/Sarthak1009/portfolio', 'Code Repo'),
          new ProjectLink('Live Link', 'https://sarthak1009.github.io/portfolio', 'Live Site'),
          new ProjectLink('Portfolio Demo', '/assets/img/PorfolioDemo_01.png', 'Image'),
          new ProjectLink('Portfolio Demo', '/assets/img/PortfolioDemo_02.png', 'Image'),
          new ProjectLink('Portfolio Demo', '/assets/img/PorfolioDemo_03.png', 'Image'),
          new ProjectLink('Portfolio Demo', '/assets/img/PorfolioDemo_04.png', 'Image'),
          new ProjectLink('Portfolio Demo', '/assets/img/PortfolioDemo_05.png', 'Image'),
        ]
      ),
      new Project(
        'Cengage Learning',
        'Cengage Learning: Learning Management System (LMS) tailored specifically for the Accounts domain, encompassing key areas such as Ledgers, Payroll, and related fields.',
        'Completed',
        'FrontEnd - Angular',
        new Date('2021-04-08T00:00:00.000Z'),
        new Date('2021-11-15T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Zeus Learning',
        [
          new Technology('Angular'),
          new Technology('HTML, CSS'),
        ],
        []
      ),
      new Project(
        'MeanJeans',
        'MeanJeans (Cengage Learning): User-friendly webpages designed for medical learning, emphasizing accessibility to ensure an inclusive educational experience. Integrated accessibility features in adherence to Web Content Accessibility Guidelines (WCAG) standards',
        'Completed',
        'FrontEnd - Angular',
        new Date('2021-12-15T00:00:00.000Z'),
        new Date('2021-06-30T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Zeus Learning',
        [
          new Technology('Angular'),
          new Technology('HTML, CSS'),
        ],
        []
      ),
      new Project(
        'Labguru 2020',
        'Labguru 2020 (A Complete Dental Solution): A holistic Dental Solution that seamlessly manages the entire product journey, from initial consultation with the dentist to the selection, production, manufacturing, delivery, dispatch, and tracking of dental products.',
        'Completed',
        'FullStack - Website',
        new Date('2022-09-01T00:00:00.000Z'),
        new Date('2024-09-11T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Illusion Dental Lab',
        [
          new Technology('Angular'),
          new Technology('.Net'),
          new Technology('SQL Server'),
        ],
        []
      ),
      new Project(
        'Aligner Portal',
        'Aligner Portal: A Customer Portal exclusively designed for doctors/customer. This portal provides a comprehensive solution for tracking products from the production phase to final delivery.',
        'Completed',
        'FrontEnd - Angular',
        new Date('2022-11-15T00:00:00.000Z'),
        new Date('2024-09-11T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Illusion Dental Lab',
        [
          new Technology('Angular'),
          new Technology('.Net'),
          new Technology('SQL Server'),
        ],
        []
      ),
      new Project(
        'SelfServe PWA',
        'SelfServe PWA: A Progress Web App offering real-time insights into each stage of the product lifecycle. From production initiation to manufacturing and final delivery, this app provides a efficient monitoring and optimization of the entire product journey.',
        'Completed',
        'FrontEnd - Angular',
        new Date('2023-06-15T00:00:00.000Z'),
        new Date('2023-09-30T00:00:00.000Z'),
        new Location('Mumbai', 'India'),
        'Illusion Dental Lab',
        [
          new Technology('Angular'),
          new Technology('.Net'),
          new Technology('SQL Server'),
        ],
        []
      ),
    ]; 
    return this.projects;
  }
}
