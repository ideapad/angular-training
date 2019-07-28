import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("appTitle", {static: true}) appTitle: any;

  title = 'shop';

  ngOnInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }
}
