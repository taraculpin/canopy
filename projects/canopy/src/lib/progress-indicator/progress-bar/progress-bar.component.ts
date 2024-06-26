import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [ './progress-bar.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgProgressBarComponent {
  @Input() max = 0;
  @Input() value = 0;
  @Input() isAriaLiveRegion = false;
  @Input() ariaLabel = 'Progress bar';
  @Input() ariaLabelledBy: null | string = null;

  // This getter calculates the progress as a percentage of `value` to `max`.
  // If `max` is 0, it returns 0 to avoid division by zero.
  // The result is then passed to `Math.min` with 100 to ensure the progress never exceeds 100.
  get progress(): number {
    if (this.max <= 0) {
      return 0;
    }

    const rawPercentage = (this.value / this.max) * 100;

    return Math.min(rawPercentage, 100);
  }
}
