import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
   templateUrl: './app.component.html',
})
export class AppComponent {
  color = 'red';
  title = 'Angular 2 Two-Way Binding';
  story = {
    name: 'The Empire Strikes Back'
  };

  change(){
    this.story.name = "testing";
    this.color = "blue";
  }

}
