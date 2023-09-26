<template>
  <footer>
    <CarouselSectionList />
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
      <a href="#" class="link-active">
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
      <SvgoGcLogo class="footer-logo" :fontControlled="false" filled/>
    </BannerLink>
  </footer>
  <canvas ref="wrapper" class="noise-canvas"/>
</template>

<style lang="scss">
  .noise-canvas{
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    opacity: .07;
    z-index: 100000;
    pointer-events: none;
    mix-blend-mode: darken;
    will-change: transform;
  }
</style>

<script setup>
  const wrapper = ref(null)

  const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;
    let resizeThrottle;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }
      noiseData.push(idata);
    };
    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }
      ctx.putImageData(noiseData[frame], 0, 0);
    };
    const loop = () => {
      paintNoise(frame);
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, (1000 / 25));
    };
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
      loop();
    };
    const reset = () => {
      window.addEventListener('resize', () => {
        window.clearTimeout(resizeThrottle);
        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      }, false);
    };
    const init = (() => {
      canvas = wrapper.value;
      ctx = canvas.getContext('2d');
      setup();
    })();
  };

  onMounted(() => {
    noise()
  })
</script>