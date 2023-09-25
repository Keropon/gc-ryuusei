<template>
  <div>
    <article>
      <h2>{{ post.title }}</h2>
      <div v-html="post.content" />
    </article>
  </div>
</template>
<script setup lang="ts">
  let post = computed(() => {
    return {
      title: 'My first post',
      slug: 'my-first-post',
      content: '<p>This is my first post</p>',
      excerpt: '<p>This is my first post</p>',
    }
  })
  const pageTitle = computed(() => 'Gamercafe - ' + post.value.title)
  const pageDescription = computed(() => post.value.excerpt)

  useSeoMeta({
    title: pageTitle,
    description: pageDescription,
  })
</script>