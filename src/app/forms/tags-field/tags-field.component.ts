import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  model,
  signal
} from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {TagsService} from "@services/tags/tags.service";
import {DialogService} from "@services/dialog/dialog.service";

@Component({
  selector: 'os-tags-field',
  templateUrl: 'tags-field.component.html',
  styleUrl: 'tags-field.component.scss',
  imports: [MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsFieldComponent {
  @Input({
    required: true
  })
  tagsFormControl!: FormControl<string[] | null>;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentTag = model('');
  readonly tags = signal<Set<string>>(new Set);
  readonly allTags: string[] = [];
  readonly filteredTags = computed(() => {
    const currentTag = this.currentTag().toLowerCase();
    return currentTag
      ? this.allTags.filter(fruit => fruit.toLowerCase().includes(currentTag))
      : this.allTags.slice();
  });

  constructor(
    private readonly tagsService: TagsService,
    private readonly dialogService: DialogService,
  ) {
    afterNextRender(() => {
      this.tagsService.getOfficialTags().subscribe(res => {
        if(res.body?.records) {
          this.currentTag.set(" ")
          this.allTags.push(...res.body?.records.map(i => i.name))
          this.currentTag.set("");
        }
      });
    })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value && this.allTags.includes(value)) {
      this.tags.update(tags => {
        tags.add(value);
        return tags;
      });
      this.tagsFormControl.setValue([...this.tags()])
    } else if (value && !this.allTags.includes(value) && !this.tags().has(value)) {
      this.dialogService.confirm({title: `是否要创建Tag： ${value}`}).afterClosed().subscribe((ok) => {
        if (ok) {
          this.tags.update(tags => {
            tags.add(value);
            return tags;
          });
          this.tagsFormControl.setValue([...this.tags()])
        }
      })
    }

    // Clear the input value
    this.currentTag.set('');
  }

  remove(tag: string): void {
    this.tags.update(tags => {
      tags.delete(tag);
      return tags;
    });
    this.tagsFormControl.setValue([...this.tags()])
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.update(tags => {
      tags.add(event.option.viewValue);
      return tags;
    });
    this.tagsFormControl.setValue([...this.tags()])
    this.currentTag.set('');
    event.option.deselect();
  }
}
