import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-badge',
  templateUrl: './simple-badge.component.html',
  styleUrls: ['./simple-badge.component.scss']
})
export class SimpleBadgeComponent {
  hidden = false;
  disabled = true;
  overlap = true;

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }

  toggleBadgeOverlap(): void {
    this.overlap = !this.overlap;
  }

  toggleBadgeDisabled(): void {
    this.disabled = !this.disabled;
  }
}
