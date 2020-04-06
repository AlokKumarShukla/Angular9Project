import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  title = 'Angular9Project';
  chekif=true;
  isValid:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  clickMe()
  {
    alert("You clicked me.");

  }
  changeValue(valid)
  {
    alert(valid);
    this.isValid=valid;
  }

}
