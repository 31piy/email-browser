import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

/**
 * The class to apply on the `span` wrapping the highlighted substrings inside
 * the contents.
 */
const className = 'app-highlight';

/**
 * A simple directive to highlight specific substrings inside the contents
 * of an HTML element.
 *
 * @example
 * <div [appHighlight]="stringToHighlight"></div>
 */
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective implements AfterViewInit {
  /**
   * The string to highlight.
   */
  @Input() appHighlight: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (!!this.appHighlight) {
      let contents = this.el.nativeElement.innerHTML;

      contents = contents.replace(
        new RegExp(this.appHighlight, 'gi'),
        (a: string) => `<span class="${className}">${a}</span>`
      );

      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', contents);
    }
  }
}
