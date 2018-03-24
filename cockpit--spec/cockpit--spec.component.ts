import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit--spec',
  templateUrl: './cockpit--spec.component.html',
  styleUrls: ['./cockpit--spec.component.css']
})
export class CockpitSpecComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  } 
  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
  }
}


}
