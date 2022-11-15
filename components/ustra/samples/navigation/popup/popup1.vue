<template>
  <v-card>
    <template #title> Popup </template>
    <template #subtitle> <UMarkdownViewer :content="popup1" /></template>
    <template #text>
      <UButton text="팝업 열기" @click="() => (showPopup = true)"></UButton>

      <UPopup v-model="showPopup" :width="800" :height="600" title="팝업제목">
        <div>
          <div>내용</div>
          <div>
            <UCodeComboBox grpCd="SYS_CD" v-model="codeValue" displayNullText="전체" />
          </div>
        </div>
      </UPopup>
      <UMarkdownViewer :content="popup2" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref } from '#ustra/nuxt'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import { UPopup, UButton } from '#ustra/nuxt-wijmo/components'
import { UCodeComboBox } from '#ustra/nuxt-wijmo/management/components'

// @ts-ignore
import popup1 from './md/popup1.md'
// @ts-ignore
import popup2 from './md/popup2.md'

const showPopup = ref(false)
const codeValue = ref(null)
</script>
