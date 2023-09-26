<template>
  <section class="heading-posts">
    <PostList post-type="header" />
  </section>
  <section class="featured-posts">
    <SvgoGcTack class="text-xl mr-2" filled />
    <PostList post-type="featured" />
  </section>
  <section class="main-posts">
    <PostList post-type="all"/>
    <aside>
      <img src="" alt="">
    </aside>
  </section>
</template>

<script setup>
  useSeoMeta({
    title: 'Gamercafe - Noticias, Reviews y Podcasts',
    description: 'Gamercafe - Noticias, Reviews y Podcasts',
  })
</script>

<style lang="scss">
  .heading-posts{
    .posts-list{
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 1rem;
    }
  }
  .featured-posts{
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    background-color: var(--gc-main-color);
    .posts-list{
      display: grid;
      grid-auto-columns: 250px;
      grid-auto-flow: column;
      column-gap: 1rem;
    }
  }
  .main-posts{
    display: grid;
    grid-template-columns: 1fr 300px;
    column-gap: 1rem;
  }
</style>