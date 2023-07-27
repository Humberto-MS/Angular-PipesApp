import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower : string = "humberto";
  public nameUpper : string = "HUMBERTO";
  public fullName : string = "hUmBeRtO mEdInA";

  public customDate : Date = new Date();
}
