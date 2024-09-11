import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Education from "../../models/Education";
import Location from "../../models/Location";
import Activity from "../../models/Activity";
import Link from "../../models/Link";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  private educations: Education[] | undefined;

  constructor(private http: HttpClient) {
  }

  getEducations(): Education[] {
    const Location1 = new Location("Mumbai", "India");

    const Activities1 = [new Activity("78%"), new Activity("Chess Club")];
    const Activities2 = [new Activity("60%"), new Activity("Cricket Club")];
    const Activities3 = [new Activity("GPA - 8.0"), new Activity("Cricket Club")];
    const Links1 = [new Link("", "")];

    // Creating multiple Education objects
    this.educations = [
      new Education(
        "Maharashtra State Board",
        "SSC",
        "Secondary School Certificate",
        false, // isCurrent
        new Date(2014, 8, 1), // Start date (September 2014)
        new Date(2015, 5, 30), // End date (June 2015)
        Location1,
        Activities1,
        Links1
      ),
      new Education(
        "Maharashtra State Board",
        "HSC",
        "Science",
        false, // isCurrent
        new Date(2015, 8, 1), // Start date (September 2015)
        new Date(2017, 5, 30), // End date (June 2017)
        Location1,
        Activities2,
        Links1
      ),
      new Education(
        "Mumbai University",
        "BSc.",
        "Computer Science",
        false, // isCurrent
        new Date(2017, 8, 1), // Start date (September 2017)
        new Date(2020, 5, 30), // End date (expected June 2020)
        Location1,
        Activities3,
        Links1
      ),
    ];
    return this.educations
  }
}
