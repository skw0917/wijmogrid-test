<template>
  <v-card>
    <template #title> 기본타입 (Text) </template>
    <template #subtitle> type, disabled, placeholder, maxLength 활용 </template>
    <template #text>
      <UTextBox v-model="test"></UTextBox>
      <UTextBox v-model="test" type="text"></UTextBox>
      <UTextBox v-model="test" type="text" disabled></UTextBox>
      <UTextBox type="text" placeholder="값을 입력해주세요."></UTextBox>
      <UTextBox type="text" maxLength="5"></UTextBox>
      <UMarkdownViewer>{{ textBox1 }}</UMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import textBox1 from './md/textbox1.md'
const test = ref('123456789123456789')
</script>

<style scoped></style>
