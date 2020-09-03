import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  serverId: number = 30;
  serverStatus: String = "TomCat";
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  serverCreate = false;
  userName ='';
  getServerStatus(){
    return this.serverStatus;
  }
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreate = true;
    this.serverCreationStatus = "Server was created!";
  }
  onUpdateUName(){
    this.userName = "";
    return this.userName;
  }
}
