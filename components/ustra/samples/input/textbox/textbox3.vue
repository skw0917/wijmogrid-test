<template>
  <v-card>
    <template #title> Mask 타입 </template>
    <template #subtitle> </template>
    <template #text>
      <UTextBox type="mask" v-model="test1" />
      <UTextBox type="mask" mask="lll-lll-lll-lll" v-model="test2" />
      <UMarkdownViewer>{{ textBox3 }}</UMarkdownViewer></template
    >
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import textBox3 from './md/textbox3.md'
const test1 = ref('123456789123456789')
const test2 = ref('abcdefghijklmnopqrstuvwxyz')
</script>

<style scoped></style>
