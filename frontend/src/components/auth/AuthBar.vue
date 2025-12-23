<script setup lang="ts">
import ThemeSwitch from '../ThemeSwitch.vue';

interface Props {
  nextRoute: string
  btnTitle: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>REZE CRM</v-app-bar-title>

    <div class="d-flex align-center justify-center ga-5 mr-5">
      <theme-switch/>
      <v-btn
        variant="flat"
        color="blue-grey-darken-4"
        class="text-capitalize"
        :to="{ name: props.nextRoute }"
      >
        {{ props.btnTitle }}
      </v-btn>
    </div>
  </v-app-bar>
</template>
