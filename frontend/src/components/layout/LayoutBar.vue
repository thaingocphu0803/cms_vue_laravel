<script setup lang="ts">
import systemConfig from '@/config/system'
import ThemeSwitch from '../ThemeSwitch.vue'
import NotificationBtn from './NotificationBtn.vue'
import LanguageBtn from './LanguageBtn.vue'
import MobileMenuBtn from './MobileMenuBtn.vue'
import BaseBtn from '../BaseBtn.vue'

interface Props {
  textColor?: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-app-bar v-bind="$attrs">
			<template v-slot:prepend>
				<slot name="icon"></slot>
			</template>
			
      <v-app-bar-title :class="props.textColor">{{ systemConfig.appName }}</v-app-bar-title>

    <div class="d-flex align-center justify-center ga-5 mr-5">
      <slot></slot>
    </div>
  </v-app-bar>
</template>
