import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-masked-card-number',
  standalone: true,
  templateUrl: './masked-card-number.component.html',
  styleUrl: './masked-card-number.component.scss',
})
export class MaskedCardNumberComponent {
  /**
   * 完整卡号（建议只在前端短暂使用，不要长期存储）
   */
  @Input() cardNumber: string | null | undefined;

  /**
   * 保留显示的尾号位数，默认 4 位
   */
  @Input() visibleDigits = 4;

  /**
   * 掩码字符，默认使用 “*”
   */
  @Input() maskChar = '*';

  /**
   * 是否在前后端已经只提供了尾号（如 "1234"），此时避免再次截断
   */
  @Input() isLastDigitsOnly = false;

  get masked(): string {
    const raw = (this.cardNumber ?? '').replace(/\s+/g, '');
    if (!raw) {
      return '';
    }

    let digits = raw;

    if (this.isLastDigitsOnly) {
      // 仅已知尾号：按尾号长度构造掩码
      const visible = digits;
      const maskedPart = this.maskChar.repeat(Math.max(0, 4));
      return `${maskedPart} ${visible}`;
    }

    const len = digits.length;
    const visible = Math.min(this.visibleDigits, len);
    const maskedLen = len - visible;
    const maskedPart = this.maskChar.repeat(Math.max(0, maskedLen));
    const visiblePart = digits.slice(-visible);

    // 简单分组：按 4 位一组插入空格，提升可读性
    const group = (s: string) => s.replace(/(.{4})/g, '$1 ').trim();

    if (maskedPart.length === 0) {
      return group(visiblePart);
    }

    return `${group(maskedPart)} ${group(visiblePart)}`.trim();
  }
}

