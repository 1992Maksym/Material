import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  date: any
  ageControl: boolean = true;
  dateNow = Date.now()
  adult = 1000 * 60 * 60 * 24 * 360 * 18;
  min = this.dateNow - this.adult;
  minDate = new Date(this.min);


  constructor(){
    console.log(this.date)
  }
}
