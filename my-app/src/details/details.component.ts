import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute) {}
  id?: number;
  name?: string;
  display() {
    this.id = Number(this.route.snapshot.params['id']);
    this.name = this.route.snapshot.params['name'];
  }
  ngOnInit() {
    this.display();
  }
}
