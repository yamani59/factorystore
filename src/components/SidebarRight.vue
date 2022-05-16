<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router';

const navIcon = ref([
  { name: 'menu', icon: 'mdi-silverware' },
  { name: 'history', icon: 'mdi-history' },
  { name: 'wallet', icon: 'mdi-wallet' },
  { name: 'setting', icon: 'mdi-cog' },
  { name: 'logout', icon: 'mdi-logout' }
])
const disableStyle = ref({
  parrent: 'text-center w-100 pa-3',
  text: 'text-grey-darken-1'
})
const activeStyle = ref({
  parrent: disableStyle.value.parrent + ' bg-brown darken4 rounded-xl',
  text: 'text-shades'
})
const currentLink = ref(null)

onMounted(() => {
  const getLink = useRoute().name
  currentLink.value = getLink
})

function colorActive(name) {
  return currentLink.value == name ?
    'white' : 'grey lighten-5'
}


</script>

<template>
  <v-navigation-drawer
    permanent
    width="100"
  >
    <v-list class="d-flex flex-column justify-center">
      <v-list-item class="d-flex justify-center">
        <p id="nav-title" class="text-brown-darken-4 text-center text-h2 font-weight-bold">K</p>
      </v-list-item>
      <v-list-item 
        v-for="(icon, index) in navIcon" :key="index"
      >
        <div :class="disableStyle.parrent + ' mt-16'"
          v-if="icon.name == 'logout'"
        >
          <router-link :to="'/' + icon.name" class="option">
            <v-icon :color="colorActive(icon.name)"
            >{{ icon.icon }}</v-icon>
            <p :class="[(currentLink == icon.name) ? activeStyle.text : disableStyle.text]">
              {{ icon.name }}
            </p>
          </router-link>
        </div>
        <div :class="[(currentLink == icon.name) ? 
          activeStyle.parrent : disableStyle.parrent]"
          v-else
        >
          <router-link :to="'/' + icon.name" class="option">
            <v-icon
              :color="colorActive(icon.name)"
            >{{ icon.icon }}</v-icon>
            <p :class="[(currentLink == icon.name) ? activeStyle.text : disableStyle.text]">
              {{ icon.name }}
            </p>
          </router-link>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
  #nav-title {
    font-family: 'Pacifico', cursive;
  }
  .option {
    text-decoration: none;
    color: white;
  }
</style>