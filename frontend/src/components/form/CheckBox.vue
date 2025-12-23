<script setup lang="ts">
const modelValue = defineModel<String>()
</script>

<template>
  <v-checkbox
    density="compact"
    v-bind="$attrs"
    v-model="modelValue"
    hide-details
  ></v-checkbox>
</template>
