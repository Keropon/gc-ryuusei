<template>
  <footer>
    <BannerLink bg="discord" text="light">
      Únete a nuestro 
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-discord" fixed-width /> Discord
      </a>
    </BannerLink>
    <BannerLink bg="spotify" text="dark">
      Búscanos en
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-spotify" fixed-width /> Spotify
      </a>
    </BannerLink>
    <BannerDeck
      title="¡Lee nuestros últimos Reviews!"
      posttype="gcreviews"
      bg="gc"
      text="light"
      posttype_icon="reviews"
    />
    <BannerDeck 
      title="¡Escucha nuestros últimos programas!"
      posttype="podcast"
      bg="podcast"
      text="light"
      posttype_icon="podcasts"
    />
    <BannerLink bg="kofi" text="light">
      ¡Apóyanos! En 
      <a href="#" class="link">
        <font-awesome-icon icon="fa-solid fa-mug-saucer" fixed-width /> Ko-Fi
      </a>
    </BannerLink>
    <BannerLink bg="patreon" text="light">
      ¡Apóyanos! En 
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-patreon" fixed-width /> Patreon
      </a>
    </BannerLink>
    <BannerLink bg="stream" text="light">
      Síguenos en 
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-twitter" fixed-width /> Twitter
      </a><br>
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-facebook" fixed-width /> Facebook
      </a><br>
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-youtube" fixed-width /> Youtube
      </a><br>
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-twitch" fixed-width /> Twitch
      </a>
    </BannerLink>
    <BannerLink bg="live" text="dark">
      Síguenos en 
      <a href="#" class="link">
        <font-awesome-icon icon="fa-brands fa-instagram" fixed-width /> Instagram
      </a>
    </BannerLink>
    <BannerLink class="no-hover">
      <GamercafeLogo class="footer-logo" :fontControlled="false" filled/>
    </BannerLink>
  </footer>
</template>

<script setup>
  import GamercafeLogo from '~/assets/icons/gc-logo.svg'
</script>