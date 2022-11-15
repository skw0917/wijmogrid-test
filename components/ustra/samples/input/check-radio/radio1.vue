<URadioGroupBox v-model="radioValue" :itemsSource="radioItems" @click="onRadioClick" />
<template>
  <v-card>
    <template #title> Radio </template>
    <template #subtitle>
      <UMarkdownViewer :content="radio1" />
    </template>
    <template #text>
      <URadioGroupBox v-model="radioValue" :itemsSource="radioItems" />

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon start icon="mdi-label"></v-icon>
        radioValue : {{ radioValue }}
      </v-chip>

      <UMarkdownViewer :content="radio2" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#ustra/nuxt'
import { URadioGroupBox } from '#ustra/nuxt-wijmo/components'
import { UMarkdownViewer } from '#ustra/nuxt/components'

// @ts-ignore
import radio1 from './md/radio1.md'
// @ts-ignore
import radio2 from './md/radio2.md'

const radioItems = reactive([
  { value: '1', text: 'radio1' },
  { value: '2', text: 'radio2', disabled: true },
  { value: '3', text: 'radio3' },
])

const radioValue = ref('1')
</script>
