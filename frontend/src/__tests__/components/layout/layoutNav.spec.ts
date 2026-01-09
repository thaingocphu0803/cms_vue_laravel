import { it, expect, vi, describe, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import LayoutNav from '@/components/layout/LayoutNav.vue'

vi.mock('vuetify', async (importOriginal) => {
	const actual = await importOriginal()
	return {
		...actual,
		useDisplay: () => ({ sm: vi.fn(() => true) }),
	}
})

describe('LayoutNav.vue', () => {
	let pinia: any
	let wrapper: VueWrapper<any>

	vi.clearAllMocks()
	
	beforeEach(() => {
		pinia = createTestingPinia({
			createSpy: vi.fn,
			stubActions: true,
			initialState: {
				auth: {
					user: { name: 'test', email: 'test@gmail.com', avatar: '' },
				},
			},
		})

		wrapper = mount(LayoutNav, {
			global: {
				plugins: [pinia],
				mocks: { $t: (key: string) => `Translate ${key}` },
				stubs: {
					'v-navigation-drawer': { template: '<nav><slot /></nav>' },
					'v-list': { template: '<ul><slot /></ul>' },
					'v-list-item': { template: '<li><slot /></li>' },
					'v-list-item-title': { template: '<span><slot /></span>' },
					'v-list-item-subtitle': { template: '<span><slot /></span>' },
					'v-divider': true,
				},
			},
		})
	})

	it('render user profile', () => {
		const userName = wrapper.find('[data-testId="user-name"]')
		const userEmail = wrapper.find('[data-testId="user-email"]')

		expect(userName.text()).toBe('test')
		expect(userEmail.text()).toBe('test@gmail.com')
	})

	it('render nav menu item', () => {
		const navMenuItems = wrapper.findAll('[data-testId="nav-menu-item"]')

		expect(navMenuItems.at(0)?.attributes('title')).toBe('Translate common.module.dashboard')

		expect(navMenuItems.length).toEqual(6)
	})
})

