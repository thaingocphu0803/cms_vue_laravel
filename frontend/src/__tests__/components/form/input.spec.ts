import { it, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '@/components/form/Input.vue'

describe('Input.Vue', () => {
	it('translate message', () => {
		const wrapper = mount(Input, {
			global: {
				mocks: {
					$t: (key: string) => `Translate ${key}`,
				},
				stubs: {
					'v-text-field': {
						props: ['errorMessage'],
						template: '<div><slot name="message" :message="errorMessage"></slot></div>',
					},
				},
			},

			props: { errorMessage: 'message.code' },
		})

		expect(wrapper.text()).toBe('Translate message.code')
	})
})
