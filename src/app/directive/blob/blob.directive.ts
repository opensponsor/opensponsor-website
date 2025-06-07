import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {svg} from './blobs';

@Directive({
  selector: '[blob]'
})
export class BlobDirective implements OnInit {
  @Input('blob') theme: 'primary' | 'warn' | 'accent' = 'primary';
  @Input('alpha') alpha: number = 1;
  @Input('backgroundSize') backgroundSize: string[] = ['100%', '100%'];
  @Input('backgroundPosition') backgroundPosition: string[] = ['100%', '100%'];
  private element: HTMLElement;
  private lightTheme = new Map([
    ['primary', [0x00.toString(10), 0x57.toString(10), 0xff.toString(10)].join(',')],
    ['accent', [0xfe.toString(10), 0xbd.toString(10), 0x01.toString(10)].join(',')],
    ['warn', [0xfd.toString(10), 0x44.toString(10), 0x6e.toString(10)].join(',')],
  ]);

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  private getBlob() {
    return svg(
      {
        seed: Math.random(),
        extraPoints: 3,
        randomness: 4,
        size: 256,
      },
      {
        fill: ['rgba(', this.lightTheme.get(this.theme), ',', this.alpha, ')'].join(""),
        stroke: "transparent",
        strokeWidth: 0,
      },
    )
  }

  ngOnInit() {
    const blob = this.getBlob();

    this.element.style.backgroundImage = "url(" + ["data:image/svg+xml;base64", btoa(blob)].join(",") + ")";
    this.element.style.backgroundSize = this.backgroundSize.join(" ");
    this.element.style.backgroundRepeat = 'no-repeat';
    this.element.style.backgroundPosition = this.backgroundPosition.join(" ");

    this.element.onclick = () => {
      const blob = this.getBlob();
      this.element.style.backgroundImage = "url(" + ["data:image/svg+xml;base64", btoa(blob)].join(",") + ")";
    }
  }

}
