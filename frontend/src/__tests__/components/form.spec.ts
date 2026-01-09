import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
	let wrapper: VueWrapper<any>

	const mockValidate = vi.fn()

	beforeEach(() => {
		vi.clearAllMocks()

		wrapper = mount(Form, {
			global: {
				stubs: {
					'v-card': { template: '<div><slot/></div>' },
					'v-card-title': {
						template: '<div><slot/></div>'
					},
					'v-card-text': { template: '<div><slot/></div>' },
					'v-form': {
						template: '<form @submit="$emit(\'submit\', $event)"><slot/></form>',
						methods: {validate: mockValidate}
					}
				},
				mocks: { $t: (key: string) => `Translate ${key}`}
			},
			props: {
				title: 'auth.form.title'
			},
			slots: {
				default: '<input data-testId="vi-form-input" />'
			}
			
		})
	})

	it('render form title', () => {
		expect(wrapper.find('[data-testId="form-title"]').text()).toContain('Translate')
	})

	it('render input into form slot', () => {
		expect(wrapper.find('[data-testId="vi-form-input"]').exists()).toBeTruthy()
	})

	it('not emit if invalid form', async() => {
		mockValidate.mockResolvedValue({ valid: false })
		
		const form = wrapper.find('[data-testId="vi-form"]')
		await form.trigger('submit')

		expect(mockValidate).toHaveBeenCalled()
		expect(wrapper.emitted('submit-form')).toBeFalsy()
	})

	
	it('not emit if valid form', async() => {
		mockValidate.mockResolvedValue({ valid: true })
		
		const form = wrapper.find('[data-testId="vi-form"]')
		await form.trigger('submit')

		expect(mockValidate).toHaveBeenCalled()
		expect(wrapper.emitted('submit-form')).toBeTruthy()
	})
})