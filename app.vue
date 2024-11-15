<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
defineOgImageComponent('BlogPost', {
  title: 'Is this thing on?',
  borderColor: 'green-300',
})
</script>
