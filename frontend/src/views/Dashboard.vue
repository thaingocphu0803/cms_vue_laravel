<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const router = useRouter()

const authStore = useAuthStore();


const logout = async () => {
    const response = await authStore.authLogout();

    if (response?.status == 200) {
      router.push({ name: 'login' })
    }
}

const user = authStore.user
</script>
<template>
  <v-layout class="rounded rounded-md border">

    <v-app-bar>
	        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
		    <v-app-bar-title>REZE CRM</v-app-bar-title>

			    <div class="d-flex align-center justify-center ga-5 mr-5">
						<theme-switch/>
					    <v-btn color="primary" variant="flat" class="text-capitalize" @click="logout()">logout</v-btn>
				</div>
	  
    </v-app-bar>

    <v-navigation-drawer  mobile-breakpoint="md" rail>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :subtitle="user?.email"
          :title="user?.name"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-sheet border="dashed md" color="surface-light" height="200" rounded="lg" width="100%"></v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>
