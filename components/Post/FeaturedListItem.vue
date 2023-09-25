<template>
  <article>
    <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
      <span>{{ post.title }}</span>
    </NuxtLink>
    <div v-html="post.excerpt" />
  </article>
</template>

<script setup lang="ts">
  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  })
</script>