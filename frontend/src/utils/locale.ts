export const getLocale = () => localStorage.getItem('locale') || 'en'

export const setLocale = (locale: string) => {

	localStorage.setItem('locale', locale)
}