import {Component, Input} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";

type Size = 'sm' | 'md' | 'xl' | '2xl';

@Component({
  standalone: true,
  selector: 'os-logo',
  imports: [
    NgOptimizedImage,
    NgStyle,
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input({
    required: false
  })
  public size?: Size;

  public sizeRecord: Record<Size, string> = {
    'sm': '24px',
    'md': '36px',
    'xl': '48px',
    '2xl': '60px'
  }
}
