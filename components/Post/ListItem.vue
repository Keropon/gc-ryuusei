<template>
  <article class="post-listitem">
    <img :src="post.featuredImage.mediaItemUrl" :alt="post.title">
    <div class="post-listitem-content">
      <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
        <h2 class="post-listitem-title">{{ post.title }}</h2>
      </NuxtLink>
      <div v-html="post.excerpt" />
      <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
        Leer más
      </NuxtLink>
      <div>
        <ul class="post-listitem-metadata">
          <li>{{ post.author.name }}</li>
          <li>{{ post.date }}</li>
          <li>
            <ul class="post-listitem-tags">
              <li v-for="tag in post.tags">{{ tag.name }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
  const props = defineProps({
    post: {
      type: Object,
    }
  })
</script>

<style lang="scss">
  .post-listitem{
    display: grid;
    grid-template-columns: 300px 1fr;
    column-gap: 1rem;
    padding: .5rem 1rem;
    border: 1px solid #ccc;

    &-content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2{
        font-size: 1.5rem;
        margin: 0;
      }
    }
    &-title{
      max-inline-size: var(--size-header-4);
      width: 100%;
    }
    &-metadata{
      display: flex;
      justify-content: flex-start;
      list-style-type: none;
      padding: 0;
    }
    &-tags{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
      li{
        display: inline-block;
        font-size: .8rem;
        border-radius: 6px;
        padding: .25rem;
        margin-right: .25rem;
        border: 1px solid #ccc;
      }
    }
  }
</style>