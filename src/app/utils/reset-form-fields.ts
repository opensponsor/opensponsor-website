import {FormControl, Validators} from "@angular/forms";

export const resetFormFields = (controls: Record<string, FormControl>) => {
  Object.keys(controls).forEach((control) => {
    if(!controls[control].hasValidator(Validators.required)) {
      if(controls[control].value?.trim().length === 0) {
        controls[control].setValue(null);
      }
    }
  })
}
