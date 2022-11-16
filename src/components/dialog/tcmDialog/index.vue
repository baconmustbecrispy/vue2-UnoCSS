<template>
  <div class="m2 p2 border-1 rounded border-black/25 flex flex-col">
    <!-- PROPS -->
    <span class="text-2xl font700">{{ title }}</span>

    <div class="flex overflow-hidden">
      <!-- 左側 -->
      <div class="flex flex-col justify-between flex-1 overflow-hidden">
        <el-tabs v-model="curStep" class="p2 flex-1 overflow-y-hidden">
          <template v-for="(tab, index) in tabs">
            <el-tab-pane
              :label="tab"
              :name="`${index}`"
              class="overflow-y-auto"
              :style="styleContentHeight"
            >
              <!-- <slot :name="index" :items="items"> -->
                <el-button @click="handleAddItem({name: Math.random()})">
                  ADD2
                </el-button>
              <!-- </slot> -->
            </el-tab-pane>
          </template>
        </el-tabs>

        <el-steps :active="+curStep" finish-status="success" align-center>
          <template v-for="tab in tabs">
            <el-step :title="tab"></el-step>
          </template>
          <el-step title="完成" icon="el-icon-upload2"></el-step>
        </el-steps>
      </div>

      <!-- 右側 -->
      <div class="flex flex-col gap2 shrink-0" :style="styleSideWidth">
        <!-- 項目面板 -->
        <div class="border-1 border-black/25 rounded m2 flex-1">
          <div class="sticky top-0 z1 p2 text-xl font700 bg-gray">
            {{ itemsTitle }}
          </div>
          <div
            class="flex flex-col p4 gap4 overflow-y-auto"
            :style="styleContentHeight"
          >
            <template v-for="item in items">
              <div class="flex gap4 items-center">
                <el-button
                  circle
                  type="danger"
                  class="!p1"
                  @click="handleRemoveItem(item)"
                >
                  <div class="i-ic-baseline-delete-forever w5 h5"></div>
                </el-button>
                <span v-if="item.name" class="shrink-0">
                  {{ item.name }}
                </span>

                <el-select
                  v-if="item.count"
                  v-model="item.option"
                  placeholder=" "
                  class="m2 flex-1"
                  :disabled="!item.option"
                >
                  <el-option
                    v-if="item.option"
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
              </div>
            </template>
          </div>
        </div>

        <div class="flex justify-end m4">
          <el-button
            type="info"
            v-if="+curStep === 1"
            @click="curStep = `${+curStep - 1}`"
          >
            上一步
          </el-button>
          <el-button
            type="primary"
            v-if="+curStep === 0"
            @click="curStep = `${+curStep + 1}`"
          >
            下一步
          </el-button>
          <el-button type="success" v-if="+curStep === 1"> 完成 </el-button>
          <el-button type="danger" @click="items.clear()"> 取消 </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "tcmDialog",
  props: {
    title: {
      type: String,
      required: true,
    },
    itemsTitle: {
      type: String,
      required: false,
      default: "項目",
    },
    tabs: {
      type: Array,
      required: true,
    },
    contentHeight: {
      type: Number,
      required: false,
      default: 400,
    },
    sideWidth: {
      type: Number,
      required: false,
      default: 300,
    },
    // initItems: {
    //   type: Set,
    //   required: false,
    //   default: function () {
    //     return new Set();
    //   },
    // },
  },
  computed: {
    styleContentHeight() {
      return `height: ${this.contentHeight}px;`;
    },
    styleSideWidth() {
      return `width: ${this.sideWidth}px`;
    },
  },
  data() {
    return {
      curStep: "0",
      items: [],
    };
  },
  methods: {
    handleAddItem(item) {
      this.items.push({ name: item });
      this.$forceUpdate();
    },
    handleRemoveItem(item) {
      this.items.delete(item);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped></style>
