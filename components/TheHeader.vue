<template>
  <header class="page-header">
    <div class="container">
      <BannerLink class="no-hover">
        <nuxt-link to="/">
          <SvgoGcLogo class="header-logo" :fontControlled="false" filled/>
        </nuxt-link>
      </BannerLink>
      <nav class="main-menu">
        <ul class="menu">
          <li class="menu-item">
            <nuxt-link to="/noticias">
              <SvgoGcReviews class="text-xl mr-2" filled/> Noticias
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/reviews">
              <SvgoGcReviews class="text-xl mr-2" filled/> Reviews
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/noticias">
              <SvgoGcPodcasts class="text-xl mr-2" filled/> Podcasts
            </nuxt-link>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu-item">
            <a href="#" class="hover-active single" title="Discord">
              <font-awesome-icon icon="fa-brands fa-discord" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Spotify">
              <font-awesome-icon icon="fa-brands fa-spotify" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Ko-Fi">
              <font-awesome-icon icon="fa-solid fa-mug-saucer" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Patreon">
              <font-awesome-icon icon="fa-brands fa-patreon" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Twitter">
              <font-awesome-icon icon="fa-brands fa-twitter" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Facebook">
              <font-awesome-icon icon="fa-brands fa-facebook" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Youtube">
              <font-awesome-icon icon="fa-brands fa-youtube" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Twitch">
              <font-awesome-icon icon="fa-brands fa-twitch" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <a href="#" title="Instagram">
              <font-awesome-icon icon="fa-brands fa-instagram" fixed-width />
            </a>
          </li>
          <li class="menu-item">
            <TheThemeSwitcher/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss">
  .page-header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-primary);
    color: var(--color-primary-text);
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      max-inline-size: var(--size-container);
      nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .menu{
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style-type: none;
          padding: 0;
          margin: 0;
          .menu-item{
            margin: 0 .5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            a{
              display: flex;
              align-items: center;
              justify-content: flex-start;
              color: var(--color-primary-text);
              text-decoration: none;
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
  .mr-2{
    margin-right: .5rem;
  }
</style>
