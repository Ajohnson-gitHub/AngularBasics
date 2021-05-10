import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigments',
  templateUrl: './assigments.component.html',
  styleUrls: ['./assigments.component.css'],
})
export class AssigmentsComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    //adding new ime stamp intead
    this.log.push(new Date());
  }
}
