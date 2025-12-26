<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

const logout = async () => {
	try {
		const response = await authStore.authLogout();
		console.log(response);
	} catch (error) {
		console.log(error)
	}
}

const user = authStore.user
</script>
<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar title="Application bar">
		<v-btn color="primary" variant="elevated" @click="logout()">logout</v-btn>
	</v-app-bar>

    <v-navigation-drawer expand-on-hover permanent rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          :subtitle="user?.email"
          :title="user?.name"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-sheet
          border="dashed md"
          color="surface-light"
          height="200"
          rounded="lg"
          width="100%"
        ></v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>
