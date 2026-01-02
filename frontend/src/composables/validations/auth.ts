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

import { t } from '@/plugins/vueI18n'

const messages = {
	email: {
		required: t('validate.email.required'),
	},
	name: {
		required: t('validate.name.required'),
	},
	confirmPassword: {
		required: t('validate.confirmPassword.required'),
		confirm: t('validate.confirmPassword.confirm'),
	},
	password: {
		required: t('validate.password.required'),
		hasUpperLetter: t('validate.password.hasUpperLetter'),
		hasLowerLetter: t('validate.password.hasLowerLetter'),
		min: t('validate.password.min', { number: 8 }),
		hasNumber: t('validate.password.hasNumber'),
		hasSpecialChar: t('validate.password.hasSpecialChar'),
	},
}

// initial authValidation
const authValidation = {
	//validation name input
	name: [required(messages.name.required)],

	// validation email input
	email: [required(messages.email.required), email],

	// validation password input
	password: [
		required(messages.password.required),
		minLenghh(messages.password.min, 8),
		hasLowerLetter(messages.password.hasLowerLetter),
		hasUpperLetter(messages.password.hasUpperLetter),
		hasNumber(messages.password.hasNumber),
		hasSpecialChar(messages.password.hasSpecialChar),
	],

	// validation confirm password input
	passwordConfirm: (password: string) => [
		required(messages.confirmPassword.required),
		sameAs(messages.confirmPassword.confirm, password),
	],
}

export default authValidation

