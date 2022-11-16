<template>
  <div id="app">

    <!-- <tcmDialog title="傷科處理" :tabs="['部位', '處置/手法']">
      <template v-slot:0="scope">
        <el-button @click="addToItems1(scope.items)">
          ADD
        </el-button>
      </template>
    </tcmDialog> -->
    <medicationOrder></medicationOrder>
    <!-- <doctorOrder></doctorOrder> -->
    <!-- <traumaDialog></traumaDialog> -->
    <!-- <acupunctureDialog></acupunctureDialog> -->
  </div>
</template>

<script>
// import tcmDialog from './components/tcmDialog'
import medicationOrder from '@/components/medicationOrder'
import doctorOrder from '@/components/doctorOrder'
import traumaDialog from '@/components/dialog/traumaDialog'
import acupunctureDialog from '@/components/dialog/acupunctureDialog'

export default {
  name: "App",
  components: {
    medicationOrder,
    doctorOrder,
    traumaDialog,
    acupunctureDialog
  },
  data () {
    return {
    }
  },
  methods: {
  },
};
</script>

<style>
</style>
