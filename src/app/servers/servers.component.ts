import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //By atribute call on .html(ROOT)
  // selector: '.app-server',//by class to be call on .html
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreate = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    //this will consume servers to add a new one
    this.servers.push(this.serverName);
    //create a server
    this.serverCreate = true;
    //server creation status
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
  onUpdateServiceName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
