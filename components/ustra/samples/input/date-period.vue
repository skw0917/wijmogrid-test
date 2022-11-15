<template>
  <div>
    <v-card>
      <template #title> Input - 날짜,기간 </template>
    </v-card>

    <v-card>
      <template #title>1) 기본 사용법 </template>
      <template #subtitle> UDatePeriodBox 컴포넌트를 사용하여 일자 기간 입력을 처리할 수 있다. </template>
      <template #text>
        <div class="samplebox">
          <UDatePeriodBox v-model="dateArr1" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              dateArr1 : {{ dateArr1 }}
            </v-chip>
          </div>
          <VBtn @click="dateArr1 = ['20220507', '20221009']">배열 일자 반영</VBtn>
          <VBtn class="ml-1" @click="dateArr1 = [null, null]">배열 null 반영</VBtn>
          <div class="samplebox" />
          <UDatePeriodBox v-model:start="start" v-model:end="end" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              start : {{ start }}
            </v-chip>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              end : {{ end }}
            </v-chip>
          </div>
          <VBtn @click="start = '20220507'">시작 일자 반영</VBtn>
          <VBtn class="ml-1" @click="start = null">시작 일자 null 반영</VBtn>
          <VBtn class="ml-1" @click="end = '20221009'">종료 일자 반영</VBtn>
          <VBtn class="ml-1" @click="end = null">종료 일자 null 반영</VBtn>
        </div>
        <UMarkdownViewer>{{ datePeriod1 }}</UMarkdownViewer>
      </template>
    </v-card>

    <v-card>
      <template #title> 2) mode </template>
      <template #subtitle> mode로 컴포넌트의 입력 형태를 제어할 수 있다. 따로 지정 해 주지 않으면 기본값은 'date' mode 이다. </template>
      <template #text>
        <div class="samplebox">
          <UDatePeriodBox v-model="dateArr2" mode="date" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              dateArr2 : {{ dateArr2 }}
            </v-chip>
          </div>
          <UDatePeriodBox v-model="dateArr3" mode="datetime" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              dateArr3 : {{ dateArr3 }}
            </v-chip>
          </div>
          <UDatePeriodBox v-model="dateArr4" mode="year" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              dateArr4 :{{ dateArr4 }}
            </v-chip>
          </div>
          <UDatePeriodBox v-model="dateArr5" mode="yearmonth" />
          <div>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon start icon="mdi-label"></v-icon>
              dateArr5 : {{ dateArr5 }}
            </v-chip>
          </div>
        </div>
        <UMarkdownViewer>{{ datePeriod2 }}</UMarkdownViewer>
      </template>
    </v-card>

    <v-card>
      <template #title> 3) displayFormat, valueFormat </template>
      <template #subtitle> displayFormat으로 날짜 표시 포맷을 지정하고, valueFormat로 저장 될 날짜의 포맷을 변경 할 수 있다. </template>
      <template #text>
        <div class="samplebox">
          <UDatePeriodBox v-model="dateArr6" mode="datetime" displayFormat="yyyy-MM" valueFormat="yyyyMMddHHmm" />
          <v-chip class="ma-2" color="pink" label text-color="white">
            <v-icon start icon="mdi-label"></v-icon>
            dateArr6 : {{ dateArr6 }}
          </v-chip>
        </div>
        <UMarkdownViewer>{{ datePeriod3 }}</UMarkdownViewer></template
      >
    </v-card>

    <v-card>
      <template #title> 4) readonly </template>
      <template #subtitle> 컴포넌트를 비활성화한다. 지정 해 주지 않으면 기본값은 false이다. </template>
      <template #text>
        <UDatePeriodBox v-model="dateArr7" :readonly="true" />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          dateArr7 : {{ dateArr7 }}
        </v-chip>
        <UMarkdownViewer>{{ datePeriod4 }}</UMarkdownViewer>
      </template>
    </v-card>
    <v-card>
      <template #title> 5) isDefaultValue </template>
      <template #subtitle>
        true로 지정 시, 바인딩 된 데이터가 null인 경우에 한하여 현재 시각으로 초기화된다. <br />
        지정 해 주지 않으면 기본값은 false이다.
      </template>
      <template #text>
        <UDatePeriodBox v-model="dateArr8" mode="datetime" :isDefaultValue="true" />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          dateArr8 : {{ dateArr8 }}
        </v-chip>
        <UMarkdownViewer>{{ datePeriod5 }}</UMarkdownViewer>
      </template>
    </v-card>
    <v-card>
      <template #title> 6) radioBtn </template>
      <template #subtitle>
        true로 지정 시, 기간 설정을 간단하게 할 수 있는 라디오 버튼을 활성화 시킨다. <br />
        지정 해 주지 않으면 기본값은 false이다.<br />
      </template>
      <template #text>
        <UDatePeriodBox v-model="dateArr9" :radioBtn="true" />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          dateArr9 : {{ dateArr9 }}
        </v-chip>
        <UMarkdownViewer>{{ datePeriod6 }}</UMarkdownViewer>
      </template>
    </v-card>
    <v-card>
      <template #title> 7) radioBtn Custom </template>
      <template #subtitle> radioBtn을 커스텀하여 활용. </template>
      <template #text>
        <UBox direction="row">
          <UItem :ratio="1">
            <UButtonGroup v-model="buttonData" :id="buttonId" type="radio" @click="clickSetDate" />
          </UItem>
          <UItem :ratio="1">
            <UDatePeriodBox v-model="dateArr11" />
          </UItem>
        </UBox>

        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          dateArr11 : {{ dateArr11 }}
        </v-chip>
        <UMarkdownViewer>{{ datePeriod8 }}</UMarkdownViewer>
      </template>
    </v-card>
    <v-card>
      <template #title> 8) isMaxValue </template>
      <template #subtitle>
        true로 지정 시, 무기한 기간 설정이 가능한 체크박스를 활성화한다. <br />
        지정 해 주지 않으면 기본값은 false이다. <br />
        박스를 체크 할 경우 종료일자가 9999-12-31 23:59:59로 변경되며, 체크 해제 시 종료일자가 현재 시각으로 셋팅된다.
      </template>
      <template #text>
        <UDatePeriodBox v-model="dateArr10" mode="datetime" :isMaxValue="true" />
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon start icon="mdi-label"></v-icon>
          dateArr10 : {{ dateArr10 }}
        </v-chip>
        <UMarkdownViewer>{{ datePeriod7 }}</UMarkdownViewer>
      </template>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { UMarkdownViewer } from '#ustra/nuxt/components'
import { useDatePeriod } from '#ustra/nuxt-wijmo/composables/date-period'

// @ts-ignore
import datePeriod1 from './md/date-period1.md'

// @ts-ignore
import datePeriod2 from './md/date-period2.md'

// @ts-ignore
import datePeriod3 from './md/date-period3.md'

// @ts-ignore
import datePeriod4 from './md/date-period4.md'

// @ts-ignore
import datePeriod5 from './md/date-period5.md'

// @ts-ignore
import datePeriod6 from './md/date-period6.md'

// @ts-ignore
import datePeriod7 from './md/date-period7.md'

// @ts-ignore
import datePeriod8 from './md/date-period8.md'

const start = ref(null)
const end = ref(null)
const dateArr1 = ref([null, null])
const dateArr2 = ref(['20220507', '20221009'])
const dateArr3 = ref(['20220507220912', '20221009220912'])
const dateArr4 = ref(['2020', '2030'])
const dateArr5 = ref(['202205', '202210'])
const dateArr6 = ref(['202205072209', '202210092209'])
const dateArr7 = ref(['20220507', '20221009'])
const dateArr8 = ref([null, null])
const dateArr9 = ref(['20220507', '20221009'])
const dateArr10 = ref(['20220507220912', '20221009220912'])
const dateArr11 = ref(['20220507', '20221009'])

const buttonData = reactive([
  { value: '-1m', label: '-1개월' },
  { value: '-7D', label: '-1주' },
  { value: '-1d', label: '-1일' },
  { value: 0, label: '오늘' },
  { value: '1D', label: '1일' },
  { value: '7d', label: '1주' },
  { value: '1M', label: '1개월' },
  { value: 'ME', label: '월말' },
  { value: 'YE', label: '연말' },
])

const buttonId = computed(() => {
  return $ustra.utils.system.uuidBase62()
})

const clickSetDate = e => {
  dateArr11.value = useDatePeriod(e.target.value)
}
</script>
<style scoped>
.samplebox {
  margin-bottom: 30px;
}
</style>
