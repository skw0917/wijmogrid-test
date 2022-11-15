<template>
  <div>
    <VCard title="Rendering"></VCard>
    <div ref="renderEl"></div>
  </div>
</template>
<script lang="ts" setup>
import { useNuxtApp } from '#app'
import { createVNode, render, ref, onMounted, toRaw, h, triggerRef, resolveComponent, reactive, getCurrentInstance } from '#ustra/nuxt'
import ApprovalPopup from '#ustra/nuxt-wijmo/management/pages/common/approval-popup.vue'

const renderEl = ref<HTMLElement>()
const visible = ref<boolean>(true)
const prperties = reactive({
  show: true,
})
const instance = getCurrentInstance()

onMounted(() => {
  mount(ApprovalPopup, {
    props: {
      modelValue: visible.value,
      'onUpdate:modelValue': v => {
        console.log('updated', v)
        visible.value = v
      },
    },
    children: undefined,
    element: renderEl.value,
    app: useNuxtApp().vueApp,
  })
})

function mount(
  component,
  { props, children, element, app }: { props?: any; children?: any; element?: any; app: any } = {
    props: undefined,
    children: undefined,
    element: undefined,
    app: undefined,
  },
) {
  let el = toRaw(element)

  props = props || {}
  props = {
    ...props,
    is: component,
  }

  let vNode = createVNode(component, props, children)
  // let vNode = h(component, props)
  // let vNode = h(resolveComponent('component'), props, [])
  // vNode.appContext = useNuxtApp().vueApp._context
  vNode.appContext = instance.appContext

  // if (app && app._context) vNode.appContext = app._context
  if (el) render(vNode, el)
  else if (typeof document !== 'undefined') render(vNode, (el = document.createElement('div')))

  const destroy = () => {
    if (el) render(null, el)
    el = null
    vNode = null
  }

  return { vNode, destroy, el }
}
</script>
