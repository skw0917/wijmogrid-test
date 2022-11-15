<template>
  <v-card>
    <template #title> Icon 타입</template>
    <template #subtitle> </template>
    <template #text>
      <UTextBox type="icon" @iconClick="logMessage"></UTextBox>
      <UTextBox type="icon" iconType="refresh" @iconClick="logMessage"></UTextBox>
      <UTextBox type="icon" iconType="error"></UTextBox>
      <UMarkdownViewer>{{ textBox2 }}</UMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { UMarkdownViewer } from '#ustra/nuxt/components'
import textBox2 from './md/textbox2.md'
const logMessage = () => {
  console.log('test message')
}
</script>

<style scoped></style>
