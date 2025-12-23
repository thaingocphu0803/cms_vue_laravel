<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-btn v-bind="$attrs" type="submit" block variant="flat" color="blue-grey-darken-4">
    {{ props.title }}
  </v-btn>
</template>
