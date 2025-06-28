import {Component, Input, OnInit} from '@angular/core';
import { qrcanvas } from 'qrcanvas';
import {Platform} from "@angular/cdk/platform";

@Component({
  standalone: true,
  selector: 'os-qrcode',
  imports: [],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.scss'
})
export class QrcodeComponent implements OnInit {
  @Input({
    required: false,
  })
  public content!: string;

  public qrcodeUrl: string | undefined;

  constructor(private readonly platform: Platform) {
  }

  ngOnInit(): void {
    if(this.platform.isBrowser) {
      const canvas: HTMLCanvasElement = qrcanvas({
        data: this.content
      });
      this.qrcodeUrl = canvas.toDataURL("image/png");
    }
  }
}
