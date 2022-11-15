<template>
  <div>
    <v-card>
      <template #title> 사업자번호 </template>
      <template #subtitle> 사업자번호 컴포넌트 설명 </template>
      <template #text>
        <UTextBox type="mask" v-model="test1" />
        {{ test1 }}
      </template>
    </v-card>
    <v-card>
      <template #title> 기본사용법 </template>
      <template #subtitle> </template>
      <template #text>
        <UTextBox type="mask" v-model="test2" />
        {{ test2 }}
        <v-btn depressed @click="setTest2('000-00-00000')"> 000-00-00000 </v-btn>
        <v-btn depressed @click="setTest2(null)"> null </v-btn>
        <UMarkdownViewer>{{ textBox1 }}</UMarkdownViewer>
      </template>
    </v-card>

    <v-card>
      <template #title> Width </template>
      <template #subtitle> </template>
      <template #text>
        <UTextBox type="mask" v-model="test3" width="150" />
        <UTextBox type="mask" v-model="test3" width="300" />
        <UMarkdownViewer>{{ textBox2 }}</UMarkdownViewer></template
      >
    </v-card>

    <v-card>
      <template #title> Disabled </template>
      <template #subtitle> </template>
      <template #text>
        <UTextBox type="mask" v-model="test4" />
        <UTextBox type="mask" v-model="test4" disabled />
        <UMarkdownViewer>{{ textBox3 }}</UMarkdownViewer></template
      >
    </v-card>
    <v-card>
      <template #title> Mask </template>
      <template #subtitle> </template>
      <template #text>
        <UTextBox type="mask" v-model="test5" :mask="mask" />
        {{ test5 }}
        <v-btn depressed @click="setTest5('000-00-00000')"> 000-00-00000 </v-btn>
        <v-btn depressed @click="setTest5('000000-0000000')"> 000000-0000000 </v-btn>
        <UMarkdownViewer>{{ textBox4 }}</UMarkdownViewer>
      </template>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import textBox1 from './md/text-box1.md'
import textBox2 from './md/text-box2.md'
import textBox3 from './md/text-box3.md'
import textBox4 from './md/text-box4.md'
const test1 = ref('')
const test2 = ref('')
const test3 = ref('')
const test4 = ref('')
const test5 = ref('')
const mask = ref('')

const setTest2 = value => {
  test2.value = value
}

const setTest5 = value => {
  mask.value = value
}
</script>
