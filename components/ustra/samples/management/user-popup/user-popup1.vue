<template>
  <VCard>
    <template #subtitle
      >UUserPopup 컴포넌트를 사용하여 코드 목록을 팝업을 통해 선택할 수 있다. 코드 선택이 완료되면 selected 이벤트가 발생되며 첫번째 인자 값으로
      선택된 사용자 정보가 반환된다.</template
    >
    <template #text>
      <UButton text="팝업오픈" @click="() => (showPopup = true)" />
      <UUserPopup v-model="showPopup" @selected="data => (selectedItem = data)" />

      <br />
      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        selectedItem : {{ selectedItem }}
      </v-chip>

      <UMarkdownViewer :content="userPopup1" />
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#ustra/nuxt'
import { UButton, UMarkdownViewer } from '#ustra/nuxt-wijmo/components'
import { UUserPopup } from '#ustra/nuxt-wijmo/management/components'

// @ts-ignore
import userPopup1 from './md/user-popup1.md'

const showPopup = ref(false)
const selectedItem = ref(null)
</script>
