<script setup lang="ts">
import api from '@/services/api';
api.get('home')
</script>
<template>
	<v-alert>home</v-alert>
</template>