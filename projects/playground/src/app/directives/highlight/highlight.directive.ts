import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    this.color = this.baseColor;
  }
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Input('background-color')
  backgroundColor = 'yellow';

  @Input('base-color')
  baseColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.backgroundColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.color = this.baseColor;
  }
}
