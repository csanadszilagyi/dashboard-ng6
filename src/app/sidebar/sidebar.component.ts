import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private messages: string[] = [];

  constructor(private sharedData: SharedDataService) {}

  log(msg: string): void {
    this.messages.push(msg);
  }

  ngOnInit() {
    this.sharedData.currentMessage.subscribe( (message: string) => this.log(message));
  }

}
