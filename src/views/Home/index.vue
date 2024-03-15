<script setup lang="ts">
import CustomHeader from './CustomHeader.vue';
import { ref } from 'vue'
import { RestaurantStatus, type Restaurant } from '@/types/variables';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard.vue'

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  name: '',
  address: '',
  status: RestaurantStatus.WantToTry
})

function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    address: newRestaurant.value.address,
    status: newRestaurant.value.status
  })
  console.log(restaurantList.value)
}
</script>

<template>
  <CustomHeader/>
  <div class="bg-gray-800 grid grid-cols-4 py-4">
    <form 
      @submit.prevent="addRestaurant"
      class="flex flex-col overflow-hidden text-white px-10 py-6 gap-3"
    >
      <div class="flex justify-between">
        <label for="restaurant-name">Name: </label>
        <input 
          id="restaurant-name" 
          v-model="newRestaurant.name" 
          class="bg-gray-400 p-1 rounded-md border-black "
          type="text" 
        />
      </div>

      <div class="flex justify-between">
        <label for="restaurant-address">Address: </label>
        <input 
          id="restaurant-address" 
          v-model="newRestaurant.address" 
          class="bg-gray-400 p-1 rounded-md border-black "
          type="text" 
        />
      </div>

      <div class="flex justify-between">
        <label for="restaurant-name">Status: </label>
        <select 
          id="restaurant-status" 
          v-model="newRestaurant.status"
          class="bg-gray-400 p-1 rounded-md border-black "
          type="text" 
        >
          <option 
            v-for="status in RestaurantStatus" 
            :value="status"
            :key="status"
          >
            {{ status }}
          </option>
        </select>
      </div>

      <div class="flex justify-center">
        <button 
          type="submit"
          class="bg-slate-600 p-1 rounded-lg shadow-lg"
        >
          Add Restaurant
        </button>
      </div>
    </form>
    <ul class="col-span-3 flex flex-col px-6">
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        <RestaurantCard :restaurant="restaurant" :key="restaurant.name"/>
      </li>
    </ul>
  </div>
</template>