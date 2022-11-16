<template>
  <el-collapse-item
    :name="orderName"
    class="px2 m0 overflow-hidden overflow-x-auto"
  >
    <template #title>
      <div class="order-last flex mr2">
        <el-button
          size="mini"
          class="m0 p2"
          icon="el-icon-delete-solid"
          @click.stop=""
        >
        </el-button>
        <el-button
          size="mini"
          class="m0 p2"
          icon="el-icon-edit-outline"
          @click.stop=""
        >
        </el-button>
      </div>
      <!-- Arrow Down -->
      <p class="ml2 shrink-0">{{ orderData.title }}</p>
      <div class="order-first ml-auto shrink-0" @click.stop="">
        <div class="flex items-center py2">
          <span class="mx2 font700">數量</span>
          <el-input-number
            v-model="doctorOrderCount"
            :min="0"
            :controls="false"
            size="mini"
            class="w18"
          />
          <span class="mx2 font700">自</span>
          <el-input
            v-model="doctorOrderInsuranceType"
            :controls="false"
            size="mini"
            class="w18"
          />
          <span class="mx2 font700">自費額</span>
          <el-input-number
            v-model="doctorOrderPayment"
            :min="0"
            :controls="false"
            size="mini"
            class="w18"
          />
        </div>
      </div>
    </template>
    <slot name="content">
      <div class="flex flex-col gap2">
        <template v-for="item in orderData.items">
          <tcmDoctorOrderItemContent :data="item"></tcmDoctorOrderItemContent>
        </template>
      </div>
    </slot>
  </el-collapse-item>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "tcmDoctorOrderItem",
};
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__content {
  padding-bottom: 1rem;
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
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-auto {
  overflow-x: auto;
}
.\[\&\:not\(\:last-child\)\]\:border-b-1:not(:last-child) {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.\[\&\:not\(\:last-child\)\]\:border-black\/25:not(:last-child) {
  border-color: rgba(0, 0, 0, 0.25);
}
.bg-hex-e4e3e9 {
  --un-bg-opacity: 1;
  background-color: rgba(228, 227, 233, var(--un-bg-opacity));
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
</style>
