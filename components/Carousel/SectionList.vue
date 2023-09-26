
<template>
  <section class="carousel">
    <div class="carousel-wrapper">
      <CarouselItem v-for="item in sections" :item="item" />
    </div>
  </section>
</template>

<script setup>
  const sections = [{
    title: 'Header',
    img: 'https://picsum.photos/170/170',
    description: 'Header',
    url: '/header',
  },{
    title: 'GC Reviews',
    img: 'https://picsum.photos/170/170',
    description: 'GC Reviews',
    url: '/reviews',
  },{
    title: 'Gamercafe Podcast',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Podcast',
    url: '/podcast',
  },{
    title: 'Gamercafe Live',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Live',
    url: '/live',
  },{
    title: 'Drop Dash',
    img: 'https://picsum.photos/170/170',
    description: 'Drop Dash',
    url: '/drop-dash',
  },{
    title: 'Gamercafe Expresso 2 Turbo',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Expresso 2 Turbo',
    url: '/expresso-2-turbo',
  },{
    title: 'Gamercafe in da Hauz',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe in da Hauz',
    url: '/in-da-hauz',
  },{
    title: 'Gamercafe Latte',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Latte',
    url: '/latte',
  },{
    title: 'Gamercafe Latte Prime',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Latte Prime',
    url: '/latte-prime',
  },{
    title: 'Gamercafe Latte News',
    img: 'https://picsum.photos/170/170',
    description: 'Gamercafe Latte News',
    url: '/latte-news',
  },{
    title: 'El Escuadrón Radical',
    img: 'https://picsum.photos/170/170',
    description: 'El Escuadrón Radical',
    url: '/el-escuadron-radical',
  }]
</script>

<style lang="scss">
  .carousel{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 170px;
    max-width: 1200px;
    margin: calc(50vh - (170px) / 2) auto;
    overflow: hidden;
    &-wrapper{
      position: relative;
      top: 0;
      left: 0;
      display: flex;      
      pointer-events: none;
      gap: var(--gap);
    }
  }
</style>