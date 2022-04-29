import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: string } | null => {
  const regExpUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
  if (
    (control.value as string)
    && (control.value as string).match(regExpUrl) === null
  ) {
    return { isValidUrl: 'The image is invalid' };
  }
  return null;
};
