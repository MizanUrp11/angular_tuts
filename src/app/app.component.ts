import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = ''; //if not set will effective from highlight.directive.ts
  title = 'fundamentals';
  myControl = new FormControl();
  options: string[] = ['one','two','three'];
}
