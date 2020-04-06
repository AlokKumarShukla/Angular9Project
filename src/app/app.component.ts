import { Component, HostListener,  Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular9Project';
  constructor(@Inject(MyserviceService) myservice)
  {
    console.log("Hi This is from AppComponent");
    console.log(myservice);
  }

  @HostListener('click',['$event'])
  onhostclick(event,Event)
  {
    alert('hello1');
  }
}
