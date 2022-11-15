커스톰 팝업 창 등을 사용하기 위해 openDaumPostScreen API를 제공한다.
- API Document : http://guide.ustraframework.kro.kr/docs/node/3.0/nuxt/functions/externals_daum_post.openDaumPostScreen.html
```typescript
import { openDaumPostScreen } from '#ustra/nuxt/externals/daum/post'
```

API Document에서 안내하는대로 주소 검색 화면을 Embed 할 HTMLElement와 DaumPostScreenOptions 유형의 Option 값을 수신하며, DaumPostScreenOptions의 onSelected 속성을 통해 결과 값을 수신 후, 타 컴포넌트로 전달할 수 있다.
커스톰 컴포넌트를 제작하고 openDaumPostScreen을 통해 지정된 영역에 팝업 창을 노출하여 사용자에게 커스톰한 형태의 UI를 제공할 수 있다.
```typescript
const emits = defineEmits<{
  (e: 'selected', data: DaumPostResult): void
}>()

openDaumPostScreen(el, {
  onSelected(data) {
    emits('selected', data)
  },
})
```
다음은 UDaumPostPopup 컴포넌트의 전체 소스코드이다. 해당 코드를 참고하여 커스톰한 주소창 팝업을 만들어 보도록 하자.
```html
<template>
  <UPopup v-model="modelValue" :width="800" :height="600" title="우편번호 조회" @shown="() => loadZipContainer()">
    <div ref="zipContianer" style="width: 100%; height: 100%"></div>
  </UPopup>
</template>
<script lang="ts" setup>
import { useHead } from '#app'
import { ref } from '#ustra/nuxt'
import { useVModel } from '@vueuse/core'
import { UPopup } from '#ustra/nuxt-wijmo/components'
import { openDaumPostScreen, DaumPostResult, DaumPostScreenOptions } from '#ustra/nuxt/externals/daum/post'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    options?: DaumPostScreenOptions
  }>(),
  {
    options: () => {
      return {}
    },
  },
)
const modelValue = useVModel(props, 'modelValue')

const zipContianer = ref<HTMLDivElement>()
const emits = defineEmits<{
  (e: 'selected', data: DaumPostResult): void
  (e: 'update:modelValue', value: boolean): void
}>()

function loadZipContainer() {
  $ustra.utils.core
    .getObjectAsync(() => zipContianer.value)
    .then(() => {
      openDaumPostScreen(zipContianer.value, {
        ...props.options,
        onSelected(data) {
          emits('selected', data)
          modelValue.value = false
        },
      })
    })
}

useHead({
  script: [{ src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js' }],
})
</script>
<script lang="ts">
export default {
  name: 'UDaumPostPopup',
}
</script>
```

