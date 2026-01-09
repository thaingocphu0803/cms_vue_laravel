<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useAuthStore } from '@/stores/auth'
import defaultConfig from '@/config/default'
import { navMenu } from '@/config/menu'

const { sm } = useDisplay()
const authStore = useAuthStore()
const user = authStore.user
const avatar = user?.avatar ?? defaultConfig.avatar
</script>
<template>
  <v-navigation-drawer mobile-breakpoint="sm" :rail="sm" v-bind="$attrs">
    <v-list>
      <v-list-item :prepend-avatar="avatar">
        <v-list-item-title class="text-capitalize" data-testId="user-name">{{ user?.name }}</v-list-item-title>
        <v-list-item-subtitle  data-testId="user-email">{{ user?.email }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in navMenu" :key="item.value" :prepend-icon="item.icon" :value="item.value"
        :to="{ name: item.routeName }" :title="$t(item.title)" class="text-capitalize" data-testId="nav-menu-item"> 
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
