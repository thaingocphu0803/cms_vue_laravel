import i18n from "@/plugins/vueI18n"
import { setLocale } from "@/utils/locale"

export const changeLanguage = (locale: string) => {
	
	if (typeof locale !== 'string') return
	
	setLocale(locale)
	
	const global = i18n.global as any
	
	global.locale.value = locale
}