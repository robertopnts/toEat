<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <span class="text-4xl text-gray-300 font-bold">
            ToEat
          </span>
        </div>
        <div class="flex text-white font-medium gap-4">
          <button>
            Home
          </button>
          <button>
            About
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss" scoped>
  .header {
    @apply bg-black w-full flex justify-center;
    height: 140px;
  }

  .header-group {
    @apply flex flex-col w-4/5 max-w-6xl;
  }
</style>