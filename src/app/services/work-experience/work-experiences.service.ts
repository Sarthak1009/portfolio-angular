import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import WorkExperience from "../../models/WorkExperience";
import Location from "../../models/Location";
import Responsibility from "../../models/Responsibility";
import Link from "../../models/Link";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  private workExperiences: WorkExperience[] | undefined;

  constructor(private http: HttpClient) {
  }

  getWorkExperiences(): WorkExperience[] {
    // let apiUrl = environment.apiUrl;
    // if (!this.workExperiences) {
    //   this.workExperiences = this.http.get<WorkExperience[]>(apiUrl + '/workExperiences');
    // }
    // Dummy data for other classes
    const Location1 = new Location("Mumbai", "India");
    const Responsibilities1 = [
      new Responsibility("Developed basic Static Website with Html, CSS and JS."),
      new Responsibility("Collaborated with design team."),
    ];
    const Responsibilities2 = [
      new Responsibility("Collaborated with a cross-functional team to develop web applications using Angular ensuring responsive and user-friendly interfaces"),
      new Responsibility("Debugged, tested, and resolved software defects, ensuring smooth user experiences"),
      new Responsibility("Engaged in peer code reviews, sharing knowledge and ensuring code quality and consistency."),
    ];
    const Responsibilities3 = [
      new Responsibility("Lead the development of web applications using Angular for the frontend, .NET for API, and SQL Server for the backend, ensuring robust andscalable solutions"),
      new Responsibility("Collaborate closely with cross-functional teams to define project requirements and deliver high-impact features and enhancements on time"),
      new Responsibility("Mentor and guide team members, assigning tasks and conducting regular standup calls to monitor progress and resolve issues effectively"),
      new Responsibility("Perform code reviews to ensure code quality and adherence to coding standards"),
      new Responsibility("Participated in the entire software development lifecycle, from requirements gathering to deployment, and contributed to project planning and design discussions."),
      new Responsibility("Managed product release cycles."),
    ];

    const Links1 = [
      new Link("Company Website", "https://company1.com"),
      new Link("GitHub Project", "https://github.com/project1"),
    ];
    const Links2 = [
      new Link("Portfolio", "https://portfolio2.com"),
      new Link("GitHub Repo", "https://github.com/project2"),
    ];
    const Links3 = [
      new Link("LinkedIn", "https://linkedin.com"),
      new Link("Company Blog", "https://companyblog.com"),
    ];

    // Creating multiple WorkExperience objects
    this.workExperiences = [
      new WorkExperience(
        "Web Developer",
        "TMSA - Trained Mentors Sports Academy",
        "InternShip",
        false, // isCurrent
        new Date(2018, 7, 10), // Start date (January 15, 2021)
        new Date(2018, 10, 10), // End date (current)
        Location1,
        Responsibilities1,
        Links1
      ),
      new WorkExperience(
        "Angular Developer",
        "Zeus Learning",
        "Full-Time",
        false, // isCurrent
        new Date(2021, 1, 15), // Start date (June 1, 2019)
        new Date(2022, 8,15), // End date (December 15, 2020)
        Location1,
        Responsibilities2,
        Links2
      ),
      new WorkExperience(
        "Angular Developer",
        "Illusion Dental Laboratory",
        "Full-time",
        true, // isCurrent
        new Date(2022, 8, 15), // Start date (April 10, 2022)
        new Date(), // End date (current)
        Location1,
        Responsibilities3,
        Links3
      ),
    ];
    return this.workExperiences
  }
}
