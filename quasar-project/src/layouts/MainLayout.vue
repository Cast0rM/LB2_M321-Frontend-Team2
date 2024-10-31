<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Todo App
        </q-toolbar-title>

        <div>Team 2</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Team Members
        </q-item-label>

        <!-- Using q-btn for navigation -->
        <q-item>
          <q-item-section>
            <q-btn flat label="Castor Fernández" @click="navigateTo('https://github.com/Cast0rM')"
              class="text-button" />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn flat label="Behan Kusi" @click="navigateTo('https://github.com/KusiBehan')" class="text-button" />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn flat label="Sivan Amin" @click="navigateTo('https://github.com/Samin3000')" class="text-button" />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn flat label="Kevin Zingg" @click="navigateTo('https://github.com/KevinZingg')"
              class="text-button q-mx-xs" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen; // Toggles the state of the left drawer
    },
    navigateTo(url: string) {
      if (url) {
        window.open(url, '_blank'); // Opens the link in a new tab
      } else {
        console.log('No URL provided for navigation'); // Debugging info if the URL is empty
      }
    }
  }
});
</script>