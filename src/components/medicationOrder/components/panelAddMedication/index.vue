<template>
  <div class="flex justify-between items-center bg-hex-e4e3e9">
    <div class="flex items-center py1">
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
            icon="el-icon-zoom-in"
            class="px2 py1"
            @click="item.event()"
          ></el-button>
        </el-tooltip>
      </template>

      <div class="flex items-center gap2">
        <el-tooltip
          class="item"
          effect="dark"
          content="跳到 一般 1"
          placement="top"
        >
          <el-button
            size="mini"
            class="text-xs p0 px2 m0 bg-hex-2c88d9 text-white"
            style="height: 28px;"
          >
            一般 1 (健)
          </el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="跳到 一般 2"
          placement="top"
        >
          <el-button
            size="mini"
            class="text-xs p0 px2 m0 bg-hex-2c88d9 text-white"
            style="height: 28px;"
          >
            一般 2 (自)
          </el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="跳到 飲片 1"
          placement="top"
        >
          <el-button
            size="mini"
            class="text-xs p0 px2 m0 bg-hex-e8833a text-white"
            style="height: 28px;"
          >
            飲片 1
          </el-button>
        </el-tooltip>
      </div>
    </div>

    <el-dropdown class="flex items-center py1">
      <el-button type="primary" size="mini" style="height: 28px;">
        {{ name }} <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in options" :key="item.key">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "panelAddMedication",
};
</script>

<style lang="scss" scoped>
/* ATOMIC CSS */
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-center {
  justify-items: center;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.my1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.p0 {
  padding: 0rem;
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
.gap2 {
  grid-gap: 0.5rem;
  gap: 0.5rem;
}
.bg-hex-2c88d9 {
  --un-bg-opacity: 1;
  background-color: rgba(44, 136, 217, var(--un-bg-opacity));
}

.bg-hex-e8833a {
  --un-bg-opacity: 1;
  background-color: rgba(232, 131, 58, var(--un-bg-opacity));
}
.text-white {
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
.bg-hex-e4e3e9 {
  --un-bg-opacity: 1;
  background-color: rgba(228, 227, 233, var(--un-bg-opacity));
}
</style>
