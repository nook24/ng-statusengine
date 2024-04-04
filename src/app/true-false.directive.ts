import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  standalone: true,
  selector: 'input[type=checkbox][trueFalseValue]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrueFalseDirective),
      multi: true
    }
  ]
})
export class TrueFalseDirective {

  // Many thanks to
  // https://egghead.io/lessons/angular-create-a-custom-form-control-using-angular-s-controlvalueaccessor

  @Input() trueValue: any = true;
  @Input() falseValue: any = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('change', ['$event'])
  onHostChange(ev: any) {
    this.propagateChange(ev.target.checked ? this.trueValue : this.falseValue);
  }

  public writeValue(obj: any): void {
    // This function sync the model value with the view
    if (obj === this.trueValue) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
    }
  }

  public registerOnChange(fn: any): void {
    // This syncs the value from the view with the model
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState?(isDisabled: boolean): void {
  }

  private propagateChange = (_: any) => {
  };

}
