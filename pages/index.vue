<template>
  <UBox>
    <UItem>
      <PtnDetailBasic v-model="ptnDetail"></PtnDetailBasic>
      <UButton text="Init" @click="() => initData()" />
      <div>
      <pre>
      {{  JSON.stringify(ptnDetail, null, 2) }}
      </pre>
    </div>
    </UItem>
  </UBox>
</template>
<script lang="ts" setup>
import { useOnError, useRouter, useRoute } from '#imports'
import { WjFlexGrid, WjFlexGridColumn, WjInputMask, WjTabPanel, WjTab } from '#ustra/nuxt-wijmo/components'
import { reactive, onMounted, onBeforeMount, ref, computed, watch } from '#ustra/nuxt'
import { PtnPartnerDetailModel } from '~/services/models'
import PtnDetailBasic from '~/components/ptn-detail-basic.vue'

const ptnDetail = reactive<PtnPartnerDetailModel>({ webCtg: [] })

onMounted(async () => {
  await initData()
})

// 데이터 조회
const initData = async () => {
  const data = {
    webCtg: [
      { webCtgId: '1', magnRt: '1.00' },
      { webCtgId: '2', magnRt: '2.00' },
    ],
  }

  Object.assign(ptnDetail, data)
}

const tabList = reactive([{ header: '기본정보', pane: '' }])
watch(() => ptnDetail, (v) => {
  console.log('ptnDetail is changed...', v)
}, {
  deep: true
})

</script>
