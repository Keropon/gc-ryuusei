<template>
  <div>
    <button @click="changeTheme">
      <font-awesome-icon :icon="icon" fixed-width />
    </button>
  </div>
</template>

<script setup>
  const colorMode = useColorMode()
  const themeIndex = ref(0)
  const themes = ['system', 'light', 'dark', 'retro']
  const iconClasses = [
    'fa-solid fa-sun',
    'fa-solid fa-moon',
    'fa-solid fa-terminal',
    'fa-solid fa-mobile-retro'
  ]
  const icon = ref(iconClasses[themeIndex.value])

  function changeTheme() {
    themeIndex.value = (themeIndex.value + 1) % themes.length
    colorMode.preference = themes[themeIndex.value]
    icon.value = iconClasses[themeIndex.value]
  }
</script>

<style lang="scss">
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0;
    color: var(--color-primary-text);
    &:hover {
      color: var(--color-primary);
    }
    box-shadow: none;
  }
</style>