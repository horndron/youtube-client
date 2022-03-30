import {
  Directive, ElementRef, Renderer2, Input, OnInit,
} from '@angular/core';

enum Color {
  lessMonth = 'green',
  lessWeek = 'blue',
  moreSixMonths = 'red',
}

@Directive({
  selector: '[appDatePublishingAgo]',
})
export default class DatePublishingAgoDirective implements OnInit {
  @Input() publishedAt!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {
  }

  ngOnInit() {
    this.setColorWithPublishingTime();
  }

  setColorWithPublishingTime(): void {
    const publishedAt = Date.parse(this.publishedAt);
    const dateNow = Date.now();
    const dateIntervalOnDay = (dateNow - publishedAt) / 86400000;

    if (dateIntervalOnDay < 7) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', Color.lessWeek);
    } else if (dateIntervalOnDay < 30) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', Color.lessMonth);
    } else if (dateIntervalOnDay > 180) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', Color.moreSixMonths);
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#adadad');
    }
  }
}
