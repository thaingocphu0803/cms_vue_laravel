import { createTestingPinia } from '@pinia/testing'
import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import MobileMenuBtn from '@/components/layout/MobileMenuBtn.vue'
import { useAuthStore } from '@/stores/auth'
import { changeLanguage } from '@/composables/useLanguage'

vi.mock('@/composables/useLanguage', () => ({
	changeLanguage: vi.fn()
}))


describe('MobileMenuBtn.vue', () => {
	let pinia: any
	let wrapper: VueWrapper<any>

	beforeEach(() => {
		vi.clearAllMocks()
		
		pinia = createTestingPinia({
			createSpy: vi.fn,
			stubActions: true,
		})

		wrapper = mount(MobileMenuBtn, {
			global: {
				plugins: [pinia],
				mocks: {
					$t: (key: string) => `Translate ${key}`,
				},
				stubs: {
					'v-menu': {
						template: '<div><slot name="activator" :props="{}"/><slot/></div>',
					},
					'base-icon-btn': true,
					'v-list': { template: '<ul><slot/></ul>' },
					'v-list-group': {
						template: '<div><slot name="activator" :props="{}"/><slot/></div>',
					},
					'v-list-item': {
						props: ['title'],
						template: '<div @click="$emit(\'click\')">{{title}}<slot/></div>',
					},
				},
			},
		})
	})

	it('call handleLogout function when trigger click', async() => {
		const authStore = useAuthStore()

		const logoutBtn = wrapper.find('[data-testId="mobile-logout-item"]')

		expect(logoutBtn.text()).toContain('Translate')

		await logoutBtn.trigger('click')

		expect(authStore.authLogout).toHaveBeenCalled()
	})

	it('call changeLanguage function when trigger click', async() => {
		const changeLanguageBtn = wrapper.findAll('[data-testId="mobile-language-item"]')

		await changeLanguageBtn[0].trigger('click')

		expect(changeLanguage).toHaveBeenCalled()
		
		expect(changeLanguageBtn.length).toEqual(2)

		expect(changeLanguageBtn[0].text()).toContain('Translate')
	})
})
