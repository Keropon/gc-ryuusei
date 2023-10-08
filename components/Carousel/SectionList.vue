
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
    display: grid;
    width: calc(100% + 4rem);
    padding: 1rem 2rem 1.5rem 2rem;
    margin: 0 -2rem;
    grid-template-columns: repeat(auto, 1fr);
    grid-template-rows: 1fr;
    column-gap: 1rem;
    overflow: hidden;
    overflow-x: auto;
    background-color: var(--gc-main-color-dark);
    transform: rotate(-4deg) skew(-8deg);
    &-wrapper{
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    &-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 170px;
      height: 170px;
      transition: all .3s ease-in-out;
      &:hover{
        transform: scale(1.2);
      }
      &-title{
        font-size: 1.5rem;
        margin: 0;
      }
      &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>