import {
  email,
  hasLowerLetter,
  hasNumber,
  hasSpecialChar,
  hasUpperLetter,
  minLenghh,
  required,
  sameAs,
} from '@/utils/validationRule'

// initial authValidation
const authValidation = {
  //validation name input
  name: [required('Name')],

  // validation email input
  email: [required('Email'), email],

  // validation password input
  password: [
    required('Password'),
    minLenghh('Password', 8),
	hasLowerLetter('Password'),
	hasUpperLetter('Password'),
    hasNumber('Password'),
    hasSpecialChar('Password'),
  ],

  // validation confirm password input
  passwordConfirm: (password: string) => [
    required('Confirmation password'),
    sameAs('Password', password),
  ],
}

export default authValidation
