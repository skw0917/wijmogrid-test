<template>
  <VCard>
    <template #text>
      <UMarkdownViewer :content="editor1" />
      <div class="mb-2">
        <UButton :text="disabled ? '활성화' : '비활성화'" @click="disabled = !disabled" />
        <UButton text="Focus" @click="() => ckEditor.focus()" />
      </div>
      <UCkEditor5 v-model="content" :height="300" :disabled="disabled" :initialized="ckEditor.initialize" />

      <v-chip class="ma-2" color="pink" label text-color="white" style="height: auto; overflow: auto; white-space: normal">
        <v-icon start icon="mdi-label"></v-icon>
        content : {{ content }}
      </v-chip>
    </template>
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#ustra/nuxt'
import { UButton, UMarkdownViewer } from '#ustra/nuxt-wijmo/components'
import { UCkEditor5 } from '#ustra/nuxt-ckeditor5/components'
import { useUstraCkEditor5 } from '#ustra/nuxt-ckeditor5/composables/editor'

// @ts-ignore
import editor1 from './md/editor1.md'

const content = ref('')
const disabled = ref(false)
const ckEditor = useUstraCkEditor5()
</script>
