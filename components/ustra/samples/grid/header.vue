<template>
  <v-card>
    <v-card>
      <template #title> Grid - Header 설정 </template>
      <template #subtitle> Grid의 Header 관련 설정 사항을 설명 한다. </template>
    </v-card>
    <v-card>
      <template #title> 1) Header 그룹 기반의 컬럼 축소/확대 </template>
      <template #subtitle> columnGroups 속성을 통해 컬럼의 축소/확대 방법에 대해 설명한다. </template>
      <template #text>
        <div>
          단일 Object 데이터 그리드 by template
          <WjFlexGrid ref="grid2" :itemsSource="singleObjectData" style="max-height: 300px">
            <WjFlexGridColumnGroup :header="'Seq'" :binding="'seq'" :width="100" />
            <WjFlexGridColumnGroup :header="'Country'" :binding="'country'" :width="150" align="center" />
            <WjFlexGridColumnGroup :header="'Sales'" :collapseTo="'sales'" align="center">
              <WjFlexGridColumnGroup :header="'Sales'" :binding="'sales'" format="n2" :width="100" cssClass="main-column" />
              <WjFlexGridColumnGroup :header="'Data1'" :binding="'data1'" format="n2" :width="100" />
              <WjFlexGridColumnGroup :header="'Data2'" :binding="'data2'" format="n2" :width="100" />
            </WjFlexGridColumnGroup>
            <WjFlexGridColumnGroup :header="'Expenses'" :collapseTo="'expenses'" align="center">
              <WjFlexGridColumnGroup :header="'Expenses'" :binding="'expenses'" :width="100" cssClass="main-column" />
              <WjFlexGridColumnGroup :header="'Data3'" :binding="'data3'" :width="100" />
              <WjFlexGridColumnGroup :header="'Data4'" :binding="'data4'" :width="100" />
            </WjFlexGridColumnGroup>
          </WjFlexGrid>
          단일 Object 데이터 그리드 by code
          <WjFlexGrid ref="grid" :itemsSource="singleObjectData" style="max-height: 300px" :columnGroups="initSingleObjectDataColumns()" />
          <UMarkdownViewer>{{ headerCollapseExpand1 }}</UMarkdownViewer>
        </div>
        <div>
          복합 Object 데이터 그리드 by template
          <WjFlexGrid ref="gridMix2" :itemsSource="mixedObjectData" style="max-height: 300px">
            <WjFlexGridColumnGroup :header="'Seq'" :binding="'seq'" :width="100" />
            <WjFlexGridColumnGroup :header="'Country'" :binding="'country'" :width="150" align="center" />
            <WjFlexGridColumnGroup :header="'Sales'" :collapseTo="'sales.sales'" align="center">
              <WjFlexGridColumnGroup :header="'Sales'" :binding="'sales.sales'" format="n2" :width="100" cssClass="main-column" />
              <WjFlexGridColumnGroup :header="'Data1'" :binding="'sales.data1'" format="n2" :width="100" />
              <WjFlexGridColumnGroup :header="'Data2'" :binding="'sales.data2'" format="n2" :width="100" />
            </WjFlexGridColumnGroup>
            <WjFlexGridColumnGroup :header="'Expenses'" :collapseTo="'expenses.expenses'" align="center">
              <WjFlexGridColumnGroup :header="'Expenses'" :binding="'expenses.expenses'" :width="100" cssClass="main-column" />
              <WjFlexGridColumnGroup :header="'Data3'" :binding="'expenses.data3'" :width="100" />
              <WjFlexGridColumnGroup :header="'Data4'" :binding="'expenses.data4'" :width="100" />
            </WjFlexGridColumnGroup>
          </WjFlexGrid>
          복합 Object 데이터 그리드 by code
          <WjFlexGrid ref="gridMix" :itemsSource="mixedObjectData" style="max-height: 300px" :columnGroups="initMixedObjectDataColumns()" />
          <UMarkdownViewer>{{ headerCollapseExpand2 }}</UMarkdownViewer>
        </div>
      </template>
    </v-card>
    <v-card>
      <template #title> 2) Header 툴팁 표시 </template>
      <template #subtitle> format-item 속성을 통해 툴팁을 표시하는 방법에 대하여 설명한다. </template>
      <template #text>
        <WjFlexGrid :itemsSource="singleObjectData" style="max-height: 300px" :format-item="formatItem">
          <WjFlexGridColumn :header="'Seq'" :binding="'seq'" :width="100" />
          <WjFlexGridColumn :header="'Country'" :binding="'country'" :width="150" align="center" />
          <WjFlexGridColumn :header="'Sales'" :binding="'sales'" format="n2" :width="100" cssClass="main-column" />
          <WjFlexGridColumn :header="'Data1'" :binding="'data1'" format="n2" :width="100" />
          <WjFlexGridColumn :header="'Data2'" :binding="'data2'" format="n2" :width="100" />
          <WjFlexGridColumn :header="'Expenses'" :binding="'expenses'" :width="100" cssClass="main-column" />
          <WjFlexGridColumn :header="'Data3'" :binding="'data3'" :width="100" />
          <WjFlexGridColumn :header="'Data4'" :binding="'data4'" :width="100" />
        </WjFlexGrid>
      </template>
    </v-card>
  </v-card>
</template>
<script lang="ts" setup>
/**
 * [Demo] Header 툴팁 : https://demo.grapecity.co.kr/wijmo/learn-wijmo/Grid/Columns/Tooltips/vue
 * [Demo] Header 열 그룹 : https://demo.grapecity.co.kr/wijmo/learn-wijmo/Grid/Columns/ColumnGroupsObjectModel/vue
 */
import { WjFlexGrid, WjFlexGridColumn, WjFlexGridColumnGroup } from '#ustra/nuxt-wijmo/components'
import { ref } from '#ustra/nuxt'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import headerCollapseExpand1 from './md/header-collapse-expand1.md'
import headerCollapseExpand2 from './md/header-collapse-expand2.md'
import { Tooltip, PopupPosition } from '@grapecity/wijmo'

//#region SingleObject 데이터 기준의 확대축소 설정
/**
 * SingleObject 샘플용 Grid Data 생성
 * @param cnt Grid Row 카운트
 */
const _getSingleObjectData = (cnt: Number) => {
  // create some random data
  const data = []
  for (let i = 0; i < cnt; i++) {
    data.push({
      id: i,
      seq: i + 1,
      country: 'country_' + i,
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      data1: Math.random() * 1000,
      data2: Math.random() * 1000,
      data3: Math.random() * 1000,
      data4: Math.random() * 1000,
    })
  }
  return data
}
/**
 * SingleObject 컬럼 구성
 */
const initSingleObjectDataColumns = () => {
  return [
    { binding: 'seq', header: 'Seq', width: 100 },
    { binding: 'country', header: 'Country', width: 150, align: 'center' },
    {
      header: 'Sales',
      align: 'center',
      // 축소시 보여줄 binding 데이터 설정
      collapseTo: 'sales',
      columns: [
        { binding: 'sales', header: 'Sales', format: 'n2', width: 100, cssClass: 'main-column' },
        { binding: 'data1', header: 'Data1', format: 'n2', width: 100 },
        { binding: 'data2', header: 'Data2', format: 'n2', width: 100 },
      ],
    },
    {
      header: 'Expenses',
      align: 'center',
      // 축소시 보여줄 binding 데이터 설정
      collapseTo: 'expenses',
      columns: [
        { binding: 'expenses', header: 'Expenses', format: 'n2', width: 100, cssClass: 'main-column' },
        { binding: 'data3', header: 'Data3', format: 'n2', width: 100 },
        { binding: 'data4', header: 'Data4', format: 'n2', width: 100 },
      ],
    },
  ]
}
//#endregion

//#region MixedObject 데이터 기준의 확대축소 설정
/**
 * 샘플용 Grid Data 생성
 * @param cnt Grid Row 카운트
 */
const _getMixedObjectData = (cnt: Number) => {
  // create some random data
  const data = []
  for (let i = 0; i < cnt; i++) {
    data.push({
      id: i,
      seq: i + 1,
      country: 'country_' + i,
      sales: {
        sales: Math.random() * 10000,
        data1: Math.random() * 1000,
        data2: Math.random() * 1000,
      },
      expenses: {
        expenses: Math.random() * 5000,
        data3: Math.random() * 1000,
        data4: Math.random() * 1000,
      },
    })
  }
  return data
}

/**
 * MixedObject 컬럼 구성
 */
const initMixedObjectDataColumns = () => {
  return [
    { binding: 'seq', header: 'Seq', width: 100 },
    { binding: 'country', header: 'Country', width: 150, align: 'center' },
    {
      header: 'Sales',
      align: 'center',
      // 축소시 보여줄 binding 데이터 설정
      collapseTo: 'sales.sales',
      columns: [
        { binding: 'sales.sales', header: 'Sales', format: 'n2', width: 100, cssClass: 'main-column' },
        { binding: 'sales.data1', header: 'Data1', format: 'n2', width: 100 },
        { binding: 'sales.data2', header: 'Data2', format: 'n2', width: 100 },
      ],
    },
    {
      header: 'Expenses',
      align: 'center',
      // 축소시 보여줄 binding 데이터 설정
      collapseTo: 'expenses.expenses',
      columns: [
        { binding: 'expenses.expenses', header: 'Expenses', format: 'n2', width: 100, cssClass: 'main-column' },
        { binding: 'expenses.data3', header: 'Data3', format: 'n2', width: 100 },
        { binding: 'expenses.data4', header: 'Data4', format: 'n2', width: 100 },
      ],
    },
  ]
}
//#endregion

//#region Grid 초기 설정
/**
 * Grid 객체 ref 처리
 * <script> 내에서는 grid.value.control 로 접근
 * <template> 내에서는 grid.control 로 접근
 */
const grid = ref()
const gridMix = ref()
/**
 * 단일 Object 그리드 itemsSource 에 매핑하는 data 값
 */
const singleObjectData = _getSingleObjectData(5)
/**
 * 복합 Object 그리드 itemsSource 에 매핑하는 data 값
 */
const mixedObjectData = _getMixedObjectData(5)

//#endregion

//#region 헤더 툴팁 설정
const toolTips = new Tooltip({
  position: PopupPosition.RightTop,
  showAtMouse: true,
  showDelay: 600,
  cssClass: 'hdr-tip',
})

const formatItem = (s, e) => {
  if (e.panel == s.columnHeaders) {
    toolTips.setTooltip(e.cell, 'this is column<br/>' + '<span class="col-header">' + e.getColumn().header + '</span>')
  }
}
//#endregion
</script>
<style>
/* highlight the main column in the group */
.wj-flexgrid .wj-cells .wj-cell.main-column {
  background: #e3f4ff;
}
</style>
