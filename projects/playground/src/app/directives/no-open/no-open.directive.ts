import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  constructor() {}

  @HostListener('click')
  onCLick() {
    return false;
  }
}
