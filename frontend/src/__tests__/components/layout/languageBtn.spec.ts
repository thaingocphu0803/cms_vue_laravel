import { mount, VueWrapper } from '@vue/test-utils'
import LanguageBtn from '../../../components/layout/LanguageBtn.vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { changeLanguage } from '@/composables/useLanguage'

vi.mock('@/composables/useLanguage', () => ({
	changeLanguage: vi.fn(),
}))

describe('LanguageBtn', () => {
	let wrapper: VueWrapper<any>

	vi.clearAllMocks();
	
	beforeEach(() => {
		wrapper = mount(LanguageBtn, {
			global: {
				mocks: {
					$t: (key: string) => `Translate ${key}`,
				},
				stubs: {
					'v-menu': {
						template: '<div><slot name="activator" :props="{}"></slot><slot/></div>',
					},
					'base-icon-btn': true,
					'v-list': { template: '<ul><slot /></ul>' },
					'v-list-item': {
						props: ['title', 'value'],
						template: '<li @click="$emit(\'click\')">{{title}}</li>',
					},
				},
			},
		})
	})

	it('render v-tooltip', () => {
		const iconBtn = wrapper.findComponent({ name: 'BaseIconBtn' })
		expect(iconBtn.props('tooltip')).toBe('common.button.language')
	})

	it('render exact number of list item', () => {
		const items = wrapper.findAll('li')
		expect(items.length).toEqual(2)
		expect(items[0].text()).toContain('Translate ')
	})

		it('call changeLangue function', async() => {
		const items = wrapper.findAll('li')
		await items[0].trigger('click')
		expect(changeLanguage).toHaveBeenCalled()
	})


})
