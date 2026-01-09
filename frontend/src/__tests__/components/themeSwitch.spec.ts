import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { nextTick } from 'vue'

// Mock Vuetify
const mockTheme = {
	global: {
		name: { value: 'light' },
	},
	// Giả sử component của bạn có method này hoặc bạn mock để gán logic gán giá trị
	change: vi.fn((val) => {
		mockTheme.global.name.value = val
	}),
}

vi.mock('vuetify', async (importOriginal) => {
	const actual: any = await importOriginal()
	return {
		...actual,
		useTheme: () => mockTheme,
	}
})

describe('ThemeSwitch.vue', () => {
	let wrapper: VueWrapper<any>

	beforeEach(() => {
		vi.clearAllMocks()

		localStorage.clear()

		mockTheme.global.name.value = 'light'

		vi.spyOn(Storage.prototype, 'getItem')
		vi.spyOn(Storage.prototype, 'setItem')

	})

	it('should apply theme from storage on mount', () => {
		vi.mocked(localStorage.getItem).mockReturnValue('dark')

		wrapper = mount(ThemeSwitch, {
			global: {
				stubs: {
					'v-switch': true,
				},
			},
		})

		expect(localStorage.getItem).toHaveBeenCalledWith('userTheme')
		expect(mockTheme.change).toHaveBeenCalledWith('dark')
		expect(wrapper.vm.defaultTheme).toBe('dark')
	})

	it('should change theme and save to localStorage when switching', async () => {
		wrapper = mount(ThemeSwitch, {
			global: {
				stubs: {
					'v-switch': true,
				},
			},
		})

		const vSwitch = wrapper.findComponent({ name: 'v-switch' })
		await vSwitch.setValue('dark')

		await nextTick()

		expect(mockTheme.change).toHaveBeenCalledWith('dark')
		expect(localStorage.setItem).toHaveBeenCalledWith('userTheme', 'dark')
	})

	it('should use default theme if localStorage is empty', () => {
		vi.mocked(localStorage.getItem).mockReturnValue(null)

		wrapper = mount(ThemeSwitch, {
			global: {
				stubs: {
					'v-switch': true,
				},
			},
		})

		expect(mockTheme.change).not.toHaveBeenCalledWith('dark')
		expect(mockTheme.global.name.value).toBe('light')
	})
})

