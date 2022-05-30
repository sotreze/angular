import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDiretion.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDiretion.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDiretion.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDiretion.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDiretion): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDiretion.LEFT
      ? items[items.length -1]
      : items[0];
  }
}

enum ArrowDiretion {
  LEFT =  -1,
  RIGHT = 1
}