CkEditor 활성화 설정을 완료하면 UCkEditor5 컴포넌트를 사용하여 CkEditor를 사용할 수 있다.
- 참고 : http://guide.ustraframework.kro.kr/ref-doc/11/1RgzF3fDERrPlx4p9fWf

함께 제공되는 useUstraCkEditor5 메소드는 에디터 객체의 고유 기능을 쉽게 사용할 수 있도록 도와준다.

```html
<template>

  <div class="mb-2">
    <UButton :text="disabled ? '활성화' : '비활성화'" @click="disabled = !disabled" />
    <UButton text="Focus" @click="() => ckEditor.focus()" />
  </div>
  
  <UCkEditor5 v-model="content" :height="300" :disabled="disabled" :initialized="ckEditor.initialize" />
</template>
<script lang="ts" setup>
const content = ref('')
const disabled = ref(false)
const ckEditor = useUstraCkEditor5()
</script>
```
