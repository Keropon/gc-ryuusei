<template>
  <section :class="['banner', bgClass]">
    <h5 :class="['title', textClass]">
      <slot />
    </h5>
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
    }
  })
  
  const bgClass = computed(() => `bg-${props.bg}`)
  const textClass = computed(() => `text-${props.text}`)
</script>

<style lang="scss" scoped>
  .banner{
    display: flex;
    justify-content: center;
    color: var(--text-color);
    padding: var(--size-6) var(--size-8);
    margin: -10px -30px;
    transform: rotate(-4deg) skew(-8deg);
    :where(a){
      color: inherit;
      &:where(:not(:hover)){
        text-decoration: underline;
        text-decoration-color: rgba(255,255,255,0.25);
      }
    }
    .title{
      text-transform: uppercase;
      font-family: var(--font-display);
      font-size: var(--font-size-fluid-3);
      font-weight: var(--font-weight-bold);
      text-align: center;
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

</style>