import { createI18n, useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { en, vi } from 'vuetify/locale'
import authEn from '@/languages/english/auth.json'
import authVi from '@/languages/vietnamese/auth.json'

const messages = {
	en: {
		$vuetify: { ...en },
		...authEn,
	},
	vi: {
		$vuetify: { ...vi },
		...authVi,
	},
}

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages,
})

export const t = i18n.global.t

export const i18nLocale = {
	adapter: createVueI18nAdapter({ i18n, useI18n }),
}

export default i18n
