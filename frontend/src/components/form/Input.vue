<script setup lang="ts">
interface Props {
  errorMessage?: string
}

const modelValue = defineModel<String>()
const props = defineProps<Props>()
</script>

<template>
  <v-text-field
    v-bind="$attrs"
    v-model="modelValue"
    validate-on="blur"
    density="compact"
  ></v-text-field>
</template>
