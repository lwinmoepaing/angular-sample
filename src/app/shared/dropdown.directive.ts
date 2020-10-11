import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs: 'appDropDown'
})
export class DropdownDirective {
  @HostBinding('class.open') show = false;

  @HostListener('click') toggleClick(): void {
    this.show = !this.show;
  }
}
