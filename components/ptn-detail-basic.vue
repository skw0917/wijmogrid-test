<template>
  <br /><br />
  1번 그리드
  <WjFlexGrid :itemsSource="modelValue.webCtg" selectionMode="Row" :isReadOnly="false" style="min-height: 100px">
    <WjFlexGridColumn binding="webCtgId" header="관리카테고리 명" width="*" />
    <WjFlexGridColumn binding="magnRt" header="마진율(%)" width="*" />
  </WjFlexGrid>
  <br /><br />
  2번 그리드
  <WjFlexGrid :itemsSource="webCtgGridCollectionView" selectionMode="Row" :isReadOnly="false" style="min-height: 100px">
    <WjFlexGridColumn binding="webCtgId" header="관리카테고리 명" width="*" />
    <WjFlexGridColumn binding="magnRt" header="마진율(%)" width="*" />
  </WjFlexGrid>
  <UButtonBox right>
    <UButton text="2번 그리드 row 추가" @click="addRow2"></UButton>
    <UButton text="2번 그리드 변경내역" @click="getRow2"></UButton>
  </UButtonBox>
  <br /><br />
  3번 그리드
  <WjFlexGrid :itemsSource="collectionView" selectionMode="Row" :isReadOnly="false" style="min-height: 100px">
    <WjFlexGridColumn binding="webCtgId" header="관리카테고리 명" width="*" />
    <WjFlexGridColumn binding="magnRt" header="마진율(%)" width="*" />
  </WjFlexGrid>
  <br />
  <UButtonBox right>
    <UButton text="3번 그리드 row 추가" @click="addRow3"></UButton>
    <UButton text="3번 그리드 변경내역" @click="getRow3"></UButton>
  </UButtonBox>
</template>
<script lang="ts" setup>
import { definePageMeta, useVModel } from '#imports'
import { WjFlexGrid, WjFlexGridColumn, WjInputMask } from '#ustra/nuxt-wijmo/components'
import { reactive, onBeforeMount, ref, computed, watch, onMounted } from '#ustra/nuxt'
import { PtnPartnerDetailModel } from '~/services/models'

const props = defineProps(['modelValue'])
const modelValue = useVModel(props, 'modelValue')

// 2번 그리드
const webCtgGridCollectionView = ref(
  useCollectionView(
    [
      { webCtgId: '1', magnRt: '3.00' },
      { webCtgId: '2', magnRt: '5.00' },
    ],
    { trackChanges: true },
  ),
)
const addRow2 = () => {
  webCtgGridCollectionView.value.addNew({})
}
const getRow2 = () => {
  console.log(webCtgGridCollectionView.value.itemsAdded, webCtgGridCollectionView.value.itemsEdited)
}

// 3번 그리드
const webCtgGridCollectionView2 = computed(() => {
  return useCollectionView(toRaw(modelValue.value.webCtg), { trackChanges: true })
})


const collectionView = ref(useCollectionView([], { trackChanges: true }))
const addRow3 = () => {
  collectionView.value.addNew({}, true)
}
const getRow3 = () => {
  console.log(collectionView.value.itemsAdded, collectionView.value.itemsEdited)
}

watch(() => props.modelValue?.webCtg, (v) => {
  collectionView.value.sourceCollection = v
}, {
  immediate: true
})

</script>
