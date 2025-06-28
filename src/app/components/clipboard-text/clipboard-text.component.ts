import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {CdkCopyToClipboard} from "@angular/cdk/clipboard";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'os-clipboard-text',
  imports: [
    MatButton,
    CdkCopyToClipboard,
    MatIcon
  ],
  templateUrl: './clipboard-text.component.html',
  styleUrl: './clipboard-text.component.scss'
})
export class ClipboardTextComponent {
  @Input({
    required: true,
  })
  content!: string

  @Input({
    required: false,
  })
  class: string | undefined;

  @Input({
    required: false,
  })
  text: string | undefined;

  public copied = false;

  public onCopied() {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000)
  }
}
