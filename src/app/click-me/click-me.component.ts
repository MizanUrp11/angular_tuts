import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
addHero(newHero:string){
  if(newHero){
    this.heroes.push(newHero);
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
