import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective implements OnInit{

  @Input('size') size: string

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'font-size',
      this.size
    )
  }
}
