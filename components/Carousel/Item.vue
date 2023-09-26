
<template>
  <div>
    <NuxtLink to="item.url">
      <h3 v-show="false">{{ item.title }}</h3>
      <img
        :src="item.img"
        :alt="item.description"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
    }
  })
</script>
