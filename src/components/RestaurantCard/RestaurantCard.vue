<template>
  <div class="bg-white flex flex-col px-8 py-6 rounded cursor-pointer mt-6 drop-shadow-md">
    <div class="flex items-center justify-between w-full mb-8">
      <h1>{{ props.restaurant.name }}</h1>
      <span>{{ props.restaurant.address }}</span>
      <span>{{ props.restaurant.status }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Restaurant } from '@/types/variables';

const props = defineProps<{
  restaurant: Restaurant
}>()
</script>