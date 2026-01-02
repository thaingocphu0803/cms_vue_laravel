import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { i18nLocale } from './vueI18n'

const icons = {
	defaultSet: 'mdi',
	aliases,
	sets: {
		mdi,
	},
}
const theme = {
	defaultTheme: 'light',
	themes: {
		light: {
			dark: false,
		},
		dark: {
			dark: true,
		},
	},
}

const vuetify = createVuetify({
	components,
	directives,
	icons,
	theme,
	locale: i18nLocale,
})

export default vuetify

