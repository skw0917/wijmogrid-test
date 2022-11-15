<template>
  <VCard>
    <template #subtitle>multiple 속성을 true로 설정하여 여러 사용자를 선택하여 가져올 수 있다.</template>
    <template #text>
      <UButton text="팝업오픈" @click="() => (showPopup = true)" />
      <UUserPopup v-model="showPopup" :multiple="true" @selected="data => (selectedItem = data)" />

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        selectedItem : {{ selectedItem }}
      </v-chip>

      <UMarkdownViewer :content="userPopup2" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#ustra/nuxt'
import { UButton, UMarkdownViewer } from '#ustra/nuxt-wijmo/components'
import { UUserPopup } from '#ustra/nuxt-wijmo/management/components'

// @ts-ignore
import userPopup2 from './md/user-popup2.md'

const showPopup = ref(false)
const selectedItem = ref(null)
</script>
