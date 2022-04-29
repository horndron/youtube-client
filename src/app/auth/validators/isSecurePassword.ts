import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: string } | null => {
  if ((control.value as string).search(/[A-Z]+/) === -1) {
    return { isSecurePassword: 'Password must contain lowercase and uppercase letters' };
  } if ((control.value as string).search(/[a-z]+/) === -1) {
    return { isSecurePassword: 'Password must contain lowercase and uppercase letters' };
  } if ((control.value as string).search(/[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]+/) === -1) {
    return { isSecurePassword: 'Password must contain special characters' };
  }

  return null;
};
