import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {
  title = 'my-app';
  showHide() {

  }
  isShowHideFlag = "over"
  
  constructor() { }

  ngOnInit(): void {
  }

}
