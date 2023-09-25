<template>
  <header>
    <div>
      <div>
        <TheThemeSwitcher/>
        <GamercafeLogo class="header-logo" :fontControlled="false" filled/>
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/noticias">Noticias</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/reviews">Reviews</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/noticias">Podcasts</nuxt-link>
          </li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import GamercafeLogo from '~/assets/icons/gc-logo.svg'
</script>