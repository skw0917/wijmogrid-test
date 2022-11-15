<template>
  <v-card>
    <template #text>
      stack 속성을 true로 설정할 경우, 하위 아이템은 균등 분배가 아닌 왼쪽에 쌓이는 형태로 표시된다.<br />

      <UCheckGroupBox
        :items-source="[
          { trueValue: 'Y', falseValue: 'N', text: 'Item1' },
          { trueValue: 'Y', falseValue: 'N', text: 'Item2' },
          { trueValue: 'Y', falseValue: 'N', text: 'Item3' },
          { trueValue: 'Y', falseValue: 'N', text: 'Item4', disabled: true },
        ]"
        :border="false"
        v-model="checked6"
        :stack="true"
        :item-align="alignValue"
      >
      </UCheckGroupBox>

      <UMarkdownViewer :content="check6" />
    </template>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from '#ustra/nuxt'
import { UCheckGroupBox } from '#ustra/nuxt-wijmo/components'
import { UMarkdownViewer } from '#ustra/nuxt/components'

// @ts-ignore
import check6 from './md/check6.md'

const checked6 = reactive(['N', 'N', 'N', 'N'])

const alignValue = ref<'left' | 'center' | 'right'>('left')
</script>
