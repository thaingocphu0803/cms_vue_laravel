<script setup lang="ts">
import LayoutBar from '@/components/layout/LayoutBar.vue';
import LayoutNav from '@/components/layout/LayoutNav.vue';
import NotificationBtn from '@/components/layout/NotificationBtn.vue';
import LanguageBtn from '@/components/layout/LanguageBtn.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import MobileMenuBtn from '@/components/layout/MobileMenuBtn.vue';
</script>

<template>
	<v-layout>
		<layout-bar text-color="text-primary">
			<template #icon>
				<v-app-bar-nav-icon class="d-sm-none" color="primary"></v-app-bar-nav-icon>
			</template>

			<notification-btn />

			<language-btn />

			<theme-switch color="primary" base-color="primary" />

			<base-btn title="logout" color="primary" append-icon="mdi-logout"
				class="text-capitalize d-none d-sm-flex"></base-btn>

			<mobile-menu-btn />
		</layout-bar>

		<layout-nav></layout-nav>
		<v-main>
			<router-view></router-view>
		</v-main>
	</v-layout>
</template>