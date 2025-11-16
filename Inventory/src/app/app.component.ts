import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; // Import Title service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory'; // Default title

  // Inject Title service in the constructor
  constructor(private titleService: Title) {}

  // Set the global title when the component initializes
  ngOnInit(): void {
    this.titleService.setTitle(this.title); // Set the title to 'Inventory'
  }
}
