<template>
  <v-card>
    <template #title> Link </template>
    <template #subtitle> type 및 색상 변경 </template>
    <template #text>
      <ULink message="Page Link" />
      <ULink type="blue" message="Page Link" />
      <ULink type="gray" message="Page Link" />
      <ULink color="#ff0000" message="Page Link" />
      <UMarkdownViewer>{{ base3 }}</UMarkdownViewer>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import base3 from './md/base3.md'
</script>

<style scoped></style>
