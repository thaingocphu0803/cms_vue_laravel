<script setup lang="ts">
import BaseIconBtn from '../BaseIconBtn.vue';
import defaultConfig from '@/config/default';
import BaseBtn from '../BaseBtn.vue';
</script>

<template>
	<v-menu location="bottom center" transition="slide-y-transition">
		<template v-slot:activator="{props}">
				<base-icon-btn tooltip="Notification" icon="mdi-bell-badge" class="d-none d-sm-block" v-bind="props"></base-icon-btn>
		</template>

		<v-list max-width="420px" density="comfortable" class="pb-0" lines="two">
			<v-list-subheader title="Today" sticky></v-list-subheader>

			<v-divider></v-divider>
			
			<v-list-item :prepend-avatar="defaultConfig.avatar" density="comfortable">
				<v-list-item-title>Thai Ngoc Phu</v-list-item-title>
				<v-list-item-subtitle>
					I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
				</v-list-item-subtitle>
			</v-list-item>

			<v-list-item :prepend-avatar="defaultConfig.avatar" density="comfortable">
				<v-list-item-title>Thai Ngoc Phu</v-list-item-title>
				<v-list-item-subtitle>
					I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
				</v-list-item-subtitle>
			</v-list-item>
			
			<v-divider></v-divider>
			
			<base-btn block tile  title="see all"></base-btn>
		</v-list>
	</v-menu>
</template>