<template>
  <v-card>
    <template #title> 그리드 기본 바인딩 </template>
    <template #subtitle> 데이터를 바인딩하는 기본 로직에 대해 설명한다. </template>
    <template #text>
      <UWjFlexGrid :itemsSource="data" allowDragging="Rows" style="height: 200px">
        <WjFlexGridColumn :header="'Country'" :binding="'country'" width="2*" />
        <WjFlexGridColumn :header="'Sales'" :binding="'sales'" width="*" format="n2" />
        <WjFlexGridColumn :header="'Expenses'" :binding="'expenses'" width="*" format="n2" />
      </UWjFlexGrid>

      <UButton text="Load Data" @click="() => (data = _getData())"></UButton>

      <UMarkdownViewer>{{ basicBinding1 }}</UMarkdownViewer>
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { WjFlexGridColumn, UWjFlexGrid } from '#ustra/nuxt-wijmo/components'
import { ref } from '#ustra/nuxt'
import { UMarkdownViewer } from '#ustra/nuxt/components'

// @ts-ignore
import basicBinding1 from './md/basic-binding1.md'

const _getData = () => {
  // create some random data
  const countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',')
  const data = []
  for (let i = 0; i < countries.length; i++) {
    data.push({
      id: i,
      country: countries[i],
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
    })
  }

  return data
}

const data = ref([])
</script>
