<script setup>
import SidebarRight from '@/components/SidebarRight.vue';
import SidebarLeft from '@/components/SidebarLeft.vue';

</script>
<template>
  <v-layout>
    <v-row>
      <v-col cols="1">
        <SidebarRight />
      </v-col>
      <v-col cols="8">
        <v-row class="mt-3">
          <v-col cols="4">
            <h1 class="text-center">Choose Category</h1>
          </v-col>
          <v-col class="d-flex justify-center">
            <div class="input-search w-100">
              <input type="text" placeholder="Search category or menu...">
              <v-icon>mdi-magnify</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <SidebarLeft />
      </v-col>
    </v-row>
  </v-layout>
</template>

<style>
  .input-search {
    padding: 1em;
    border-radius: 15px;
    background: white;
    display: flex;
    justify-content: space-between;
  }

  .input-search input {
    outline: none;
    width: 80%;
  }
</style>