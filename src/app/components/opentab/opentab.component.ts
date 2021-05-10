import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opentab',
  templateUrl: './opentab.component.html',
  styleUrls: ['./opentab.component.css'],
})
export class OpentabComponent implements OnInit {
  //this create a variables
  userName = '';
  allowNewName = false;
  nameCreationStatus = 'Name not create';
  //set a time to the botton to be available after 2000 seconds
  constructor() {
    setTimeout(() => {
      this.allowNewName = true;
    }, 2000);
  }

  ngOnInit(): void {}
  //create name status after hit the buttons
  onCreateName() {
    this.nameCreationStatus = 'Name was created! Name is ' + this.userName;
  }
  //update the event and display after click
  onUpdateServiceName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
