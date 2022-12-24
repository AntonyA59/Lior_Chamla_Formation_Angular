import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  constructor() {}

  @Input("confirm-message")
  confirmMessage = "Vous êtes sûr ?"

  @HostListener('click')
  onCLick():boolean {
      return confirm(this.confirmMessage) 
  }
}
