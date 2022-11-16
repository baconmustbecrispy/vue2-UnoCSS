<template>
  <div class="flex flex-col border-1 rounded border-hex-ebeef5">
    <!-- 醫囑工具列 -->
    <div class="flex items-center bg-hex-e4e3e9 py1">
      <!-- TODO: 放大縮小 -->
      <template v-for="item in toolbar">
        <el-tooltip placement="top" v-if="item.show()">
          <template v-slot:content>
            <p class="tooltip-font">{{ item.tooltip }}</p>
          </template>
          <el-button
            circle
            size="mini"
            type="text"
            :icon="item.icon"
            class="px2 py1"
            @click="item.event()"
          ></el-button>
        </el-tooltip>
      </template>
      <el-button
        type="primary"
        size="mini"
        class="text-xs p0 px2 m0 "
        style="height: 28px;"
      >
        處置
      </el-button>
    </div>

    <!-- 醫囑列表 -->
    <div class="overflow-y-scroll px1">
      <el-collapse v-model="collapseActives">
        <template v-for="(item, index) in orderData">
          <tcmDoctorOrderItem
            :orderName="index"
            :orderData="item"
          ></tcmDoctorOrderItem>
        </template>
      </el-collapse>
    </div>

    <!-- Dialogs -->
    <tcmDoctorOrderTraumaDialog v-if="popup.traumaDialogVisible"
                                :visible="popup.traumaDialogVisible"
                                @goBack="closeTraumaDialog"
    >
    </tcmDoctorOrderTraumaDialog>
    <tcmDoctorOrderAcupunctureDialog v-if="popup.acupunctureDialogVisible"
                                :visible="popup.acupunctureDialogVisible"
                                @goBack="closeAcupunctureDialog"
    >
    </tcmDoctorOrderAcupunctureDialog>
  </div>
</template>

<script>
import index from './js'

export default {
  mixins: [index],
  name: 'tcmDoctorOrder'
}
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
}

::v-deep .el-collapse-item__arrow {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

/* ATOMIC CSS */
.order-first {
  order: -9999;
}

.order-last {
  order: 9999;
}

.m0 {
  margin: 0rem;
}

.my1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.mx1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mx2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.ml-auto {
  margin-left: auto;
}

.ml2 {
  margin-left: 0.5rem;
}

.mr2 {
  margin-right: 0.5rem;
}

.\!w38 {
  width: 9.5rem !important;
}

.h6 {
  height: 1.5rem;
}

.max-w-120 {
  max-width: 30rem;
}

.w18 {
  width: 4.5rem;
}

.w20 {
  width: 5rem;
}

.flex {
  display: flex;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.gap1 {
  grid-gap: 0.25rem;
  gap: 0.25rem;
}

.gap2 {
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.gap4 {
  grid-gap: 1rem;
  gap: 1rem;
}

.p0 {
  padding: 0rem;
}

.px1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.m0 {
  margin: 0rem;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.\[\&\:not\(\:last-child\)\]\:border-b-1:not(:last-child) {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.\[\&\:not\(\:last-child\)\]\:border-black\/25:not(:last-child) {
  border-color: rgba(0, 0, 0, 0.25);
}

.p2 {
  padding: 0.5rem;
}

.px2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.\[\&\:not\(\:last-child\)\]\:pb2:not(:last-child) {
  padding-bottom: 0.5rem;
}

.pb1 {
  padding-bottom: 0.25rem;
}

.pb4 {
  padding-bottom: 1rem;
}

.font600 {
  font-weight: 600;
}

.font700 {
  font-weight: 700;
}

.border-1 {
  border-width: 1px;
  border-style: solid;
}

.rounded {
  border-radius: 0.25rem;
}

.border-hex-ebeef5 {
  --un-border-opacity: 1;
  border-color: rgba(235, 238, 245, var(--un-border-opacity));
}

.bg-hex-e4e3e9 {
  --un-bg-opacity: 1;
  background-color: rgba(228, 227, 233, var(--un-bg-opacity));
}
</style>
