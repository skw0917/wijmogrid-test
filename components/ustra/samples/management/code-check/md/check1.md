```html
<template>
  <div class="mt-2 mb-5">
    <UCodeCheckGroupBox v-model="checkValue" v-model:objectValue="checkObjectValue" grpCd="SYS_CD" />
  </div>

  <v-chip class="ma-2" color="pink" label text-color="white">
    <v-icon start icon="mdi-label"></v-icon>
    checkValue : {{ checkValue }}
  </v-chip>
  <v-chip class="ma-2" color="pink" label text-color="white">
    <v-icon start icon="mdi-label"></v-icon>
    checkObjectValue : {{ checkObjectValue }}
  </v-chip>
</template>
<script lang="ts" setup>
const checkValue = ref(null)
const checkObjectValue = ref(null)
</script>
```
