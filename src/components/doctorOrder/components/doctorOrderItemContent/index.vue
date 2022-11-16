<template>
  <div
    class="flex items-center gap4 pb1 [&:not(:last-child)]:border-b-1 [&:not(:last-child)]:pb2 [&:not(:last-child)]:border-black/25"
  >
    <el-button type="primary" size="small" @click="data.show">{{ data.type }}</el-button>
    <div v-if="data.parts" class="flex items-center">
      <span class="mr2 font600 shrink-0">部位:</span>
      <div class="flex flex-wrap max-w150">
        <el-tag
          v-for="part in data.parts"
          :key="part"
          class="mx1"
          closable
          round
        >
          {{ part }}
        </el-tag>
      </div>
    </div>
    <div v-if="data.niddleCount" class="flex items-center shrink-0">
      <span class="mr2 font600">針數: </span>
      <span>{{ data.niddleCount }}</span>
    </div>
    <div v-if="data.methods" class="flex">
      <span class="font600 shrink-0">處置/手法:</span>
      <div class="flex flex-wrap max-w150">
        <el-tag
          v-for="method in data.methods"
          :key="method"
          class="mx1"
          closable
          round
        >
          {{ method }}
        </el-tag>
      </div>
    </div>
    <div v-if="data.acupuncturePoints" class="flex items-center">
      <span class="font600 shrink-0">針灸穴位:</span>
      <div class="flex flex-wrap max-w150">
        <el-tag
          v-for="point in data.acupuncturePoints"
          :key="point"
          class="mx1"
          closable
          round
        >
          {{ point }}
        </el-tag>
      </div>
    </div>

    <div v-if="data.time" class="flex items-center gap2 shrink-0 ml-auto">
      <span class="font600">治療時間:</span>
      <el-time-picker
        v-model="time"
        is-range
        size="small"
        format="HH:mm"
        range-separator="~"
        start-placeholder="開始時間"
        end-placeholder="結束時間"
      />
    </div>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "tcmDoctorOrderItemContent",
};
</script>

<style lang="scss" scoped>
::v-deep .el-range-editor {
  width: 12.5rem !important;
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
.ml-auto {
  margin-left: auto;
}
.mr2 {
  margin-right: 0.5rem;
}
.\!w38 {
  width: 9.5rem !important;
}
.max-w150 {
  max-width: 37.5rem;
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
