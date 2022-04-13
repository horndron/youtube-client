import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: string } | null => {
  const date = Date.now();
  if (control.value && Date.parse(control.value) - date < 0) {
    return { futureDate: 'The date is invalid' };
  }
  return null;
};
