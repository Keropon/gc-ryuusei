<template>
  <section class="heading-posts">
    <PostList post-type="header" />
  </section>
  <section class="featured-posts">
    <SvgoGcTack class="featured-icon" :fontControlled="false" filled />
    <PostList post-type="featured" />
  </section>
  <section class="main-posts">
    <div class="wrapper">
      <PostList post-type="all" pagination/>
      <aside>
        <img src="" alt="">
      </aside>
    </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    .posts-list{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      max-width: 1400px;
      > article:first-child { grid-area: 1 / 1 / 2 / 3; }
      > article:last-child { grid-area: 2 / 3 / 3 / 5; }
    }
  }
  .featured-posts{
    width: 100%;
    background-color: var(--gc-main-color-dark);
    display: grid;
    grid-template-columns: 250px 1fr;
    align-items: center;
    .featured-icon{
      display: block;
      width: 250px;
      height: 250px;
      margin: 0 1rem;

    }
    .posts-list{
      width: 100%;
      overflow-x: scroll;
      display: grid;
      align-items: stretch;
      grid-auto-columns: 250px;
      grid-auto-flow: column;
      column-gap: 1rem;
    }
  }
  .main-posts{
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper{
      max-width: 1400px;
      display: grid;
      grid-template-columns: 1fr 300px;
      column-gap: 1rem;
    }
  }
</style>