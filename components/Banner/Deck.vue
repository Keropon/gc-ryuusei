<template>
  <section :class="['banner', 'deckbanner', bgClass]">
    <header class="header">
      <slot name="header">
        <PostTypeIcon class="header-icon" :fontControlled="false" filled v-if="props.posttype_icon"/>
        <h5 :class="['title', textClass]">
          {{ title }}
        </h5>
      </slot>
    </header>
    <div class="content">
      <ul class="deck" :v-if="posts">
        <li v-for="post in posts" :key="post.slug" :post="post" class="card">
          <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }"/>
          <img :src="post.featuredImage" :alt="post.title">
          <div class="card-title">{{ post.title }}</div>
          <div class="card-icon">
            <PostTypeIcon class="card-icon-svg" :fontControlled="false" filled/>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    bg: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: 'light'
    },
    posttype: {
      type: String,
      default: 'noticias'
    },
    title: {
      type: String,
      default: 'Noticias'
    },
    posttype_icon: {
      type: String,
      default: ''
    }
  })
  
  let PostTypeIcon = null
  if (props.posttype_icon) {
    /* @vite-ignore */
    PostTypeIcon = defineAsyncComponent(() => import(`../../assets/icons/gc-${props.posttype_icon}.svg`))
  }

  const bgClass = computed(() => `bg-${props.bg}`)
  const textClass = computed(() => `text-${props.text}`)

  const query = gql`
    query Posts($limit: Int, $posttype: String) {
      posts(
        first: $limit
        where: {categoryName: $posttype, orderby: {field: DATE, order: DESC}, status: PUBLISH}
      ) {
        edges {
          node {
            title
            slug
            featuredImage {
              node {
                srcSet
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `
  const variables = { limit: 7, posttype: props.posttype }
  let posts = ref([])
  
  let init = async () => {
    const { data } = await useAsyncQuery(query, variables)
    posts.value = data?.value?.posts?.edges?.map((post) => {
      return {
        title: post?.node?.title,
        slug: post?.node?.slug,
        featuredImage: post?.node?.featuredImage?.node?.mediaItemUrl,
      }
    })
  }

  onMounted(init)
</script>

<style lang="scss" scoped>
  .banner{
    display: flex;
    justify-content: center;
    color: var(--text-color);
    padding: var(--size-6) var(--size-8);
    margin: -10px -30px;
    transform: rotate(-4deg) skew(-8deg);
    transform-origin: center center;
    :where(a){
      color: inherit;
      &:where(:not(:hover)){
        text-decoration: underline;
        text-decoration-color: rgba(255,255,255,0.25);
      }
    }
    &.deckbanner{
      padding-bottom: 0 !important;
      display: grid;
      grid-template-columns: 20% 500px 1fr;
      grid-template-rows: 1fr;
      &:hover:not(.no-hover){
        padding: var(--size-6) var(--size-8);
        padding-bottom: 0 !important;
      }
    }
    .content{
      grid-area: 1 / 3 / 2 / 4;
      display: flex;
      width: fit-content;
    }
    .header{
      grid-area: 1 / 2 / 2 / 3;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      min-width: 400px;
      max-width: 540px;
      min-height: 300px;
      text-align: left;
      padding-right: 1rem;
      .header-icon{
        width: 100px;
        height: 100px;
        margin-right: 1rem;
      }
    }
    .title{
      max-width: 400px;
      text-transform: uppercase;
      font-family: var(--font-display);
      font-size: var(--font-size-fluid-3);
      font-weight: var(--font-weight-bold);
      text-align: left;
      padding-bottom: var(--size-6);
      &.text-dark{
        color: var(--gc-light-text-color) !important;
        a.link{
          color: var(--gc-light-text-color) !important;
        }
      }
      &.text-light{
        color: var(--gc-dark-text-color) !important;
        a.link{
          color: var(--gc-dark-text-color) !important;
        }
      }
    }
    &.no-hover{
      padding: var(--size-10) 0;
      transform: unset;
    }
    &:hover:not(.no-hover){
      padding: var(--size-8) 0;
      transition: 150ms var(--ease-squish-1);
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cJFAQvOsbnaiAAAAHwSURBVGje7dldTsJAFIbhtyVcKWuAHWEIIYQQRFTERFkQLkHuWY8k/CnQugHwBuSv7UynnbEx8831aZ70oj3nDNjY2NjY2Nj8mxTIK1bmKehClRjSJ6dQmeOFISUdqCIjtnzzGhvm0sNny4iiHtRWAebSxdvVpgw7oOLCXB5YH9WmCDtFxYE5dE5QKcIuUbIwhzargNoUYMEoGZhDi2VIbUJYOEoEc2jyFVGbAHbNMOLB0bAGn4LaIddqrBx9vpVgdRbCOrUP8w72ogCrMVd+y9pgVWa6UfFhFaYmUPFgZSamULIwjwEfJlFysA0bNmZRsm/MOCopTBsqCUwrShWmHaUCM4KKCzOG2sN8CZRvEgWQZyDBelOeKxVTZizBGnNjElUR/vv2Z0LFFKoq7BKOz5SqCVRN2E+dnxk1vSSHurDzDDpz6jj6UA1hjx52FjT0wByawmkm6nzSTB/m0Iqc+2T6rS9u04W5tEMn5P2R6U6X3OGmh+oE7hIu/303wu/Zivt0YOeroHAUyEw+ax6Tw1y6MVAgMyd6PCUdXnu/mzw5FMhM1T7PyUZ9UfuiuoNI0PJc8a6EAq0bm4zut6Jhf7gNDIf98e40GJaBTfMlLO5e3tODOoVl6BbjAMvYnQ9k9IYMMnqfaGNjY2NjY2M8PwrCqnXirI/uAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA5LTIwVDA0OjQ3OjU4KzAwOjAw1iiExgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wOS0yMFQwNDo0Nzo1OCswMDowMKd1PHoAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDktMjBUMDQ6NDc6NTgrMDA6MDDwYB2lAAAAAElFTkSuQmCC);
      background-repeat: repeat;
      background-position: 0;
      background-size: 40px 40px;
      background-blend-mode: soft-light;
      animation: bg-scrolling 5s linear infinite;
      &.bg-podcast, &.bg-live{
        background-blend-mode: color;
      }
    }
  }
  .deck{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    column-gap: 1.2rem;
    padding: 0;
    transform-origin: initial;
    .card{
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 140px;
      height: 100%;
      width: 100%;
      position: relative;
      border-radius: .6rem .6rem 0 0;
      overflow: hidden;
      padding: 0;
      list-style-type: none;
      .card-title{
        display: none;
        position: absolute;
        line-height: 1.2;
        font-weight: var(--font-weight-4);
        align-items:flex-end;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        padding: .5rem .5rem 1rem 2rem;
        margin: 0 -1rem;
        color: var(--gc-dark-text-color);
        font-family: var(--font-display);
        font-size: var(--size-3);
        text-align: center;
        text-transform: uppercase;
        transition: 150ms linear;
        height: 1px;
      }
      .card-icon{
        display: none;
        position: absolute;
        top: 6px;
        right: -8px;
        padding: .25rem 1.25rem .25rem .5rem;
        z-index: 2;
        background-color: var(--gc-main-color-dark);
        .card-icon-svg{
          width: 25px;
          height: 25px;
        }
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      a{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      }
      &:hover{
        transform: scale(1.5);
        transition: 150ms var(--ease-squish-1);
        transform-origin: bottom right;
        background-color: rgba(0,0,0,0.5);
        z-index: 3;
        .card-title{
          height: fit-content;
          display: flex;
          text-align: left;
          transition: background-color 150ms linear;
          background-color: var(--gc-main-color-dark);
          background-blend-mode: darken;
        }
        .card-icon{
          display: flex;
        }
      }
    }
  }
</style>