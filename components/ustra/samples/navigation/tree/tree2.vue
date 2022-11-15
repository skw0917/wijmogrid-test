<template>
  <VCard>
    <template #title>Selection</template>
    <WjTreeView
      :itemsSource="treeData"
      :initialized="ctl => (treeView = ctl)"
      displayMemberPath="text"
      childItemsPath="items"
      :autoCollapse="false"
      style="height: 200px"
    ></WjTreeView>

    <div>selectedItem : {{ treeViewSelection }}</div>

    <UMarkdownViewer :content="tree2_1" />
  </VCard>
</template>
<script lang="ts" setup>
import { ref } from '#ustra/nuxt'
import { TreeView } from '@grapecity/wijmo.nav'
import { WjTreeView } from '#ustra/nuxt-wijmo/components'
import { useWjTreeSelectedItemData } from '#ustra/nuxt-wijmo/composables/tree'

import { UMarkdownViewer } from '#ustra/nuxt/components'

// @ts-ignore
import tree2_1 from './md/tree2.md'

type TreeData = {
  text: string
  items?: TreeData[]
}
const treeView = ref<TreeView>()
const treeViewSelection = useWjTreeSelectedItemData<TreeData>(treeView)

const treeData: TreeData[] = [
  { text: 'Root', items: [{ text: 'Child1' }, { text: 'Child2' }] },
  { text: 'Root2', items: [{ text: 'Child1' }, { text: 'Child2' }] },
]
</script>
