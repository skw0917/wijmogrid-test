<template>
  <v-card>
    <template #title> MDI 아이콘 활용 </template>
    <template #subtitle>
      iconType에 mdi 아이콘 이름 작성 <NuxtLink to="https://materialdesignicons.com/" target="_blank"> Material Design Icons</NuxtLink></template
    >
    <template #text>
      <UTextBox type="icon" iconType="mdi-close" />
      <UTextBox type="icon" iconType="mdi-check" />
      <UTextBox type="icon" iconType="mdi-close" mdiIconColor="#ff0000" />
      <UTextBox type="icon" iconType="mdi-check" mdiIconColor="#0000ff" />
      <UMarkdownViewer>{{ textBox6 }}</UMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { UMarkdownViewer } from '#ustra/nuxt/components'
import textBox6 from './md/textbox6.md'
</script>

<style scoped></style>
