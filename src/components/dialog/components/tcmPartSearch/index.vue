<template>
  <div class="flex flex-col gap4">
    <div class="flex gap4 items-center">
      <span class="font700 shrink-0 !text-xl">{{ searchTitle }}:</span>
      <el-input
        v-model="searchQ"
        :placeholder="searchPlaceholder"
        suffix-icon="el-icon-search"
        @keyup.esc="handleClearInput"
      />
    </div>

    <div class="flex flex-wrap gap4">
      <el-button
        v-for="item in filteredItems"
        :key="item"
        type="primary"
        class="!m0 !p2 !text-lg"
        size="medium "
        @click="$emit('evtAddItem', { name: item })"
      >
        {{ item }}
      </el-button>
    </div>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "tcmPartSearch",
  props: {
    searchTitle: {
      type: String,
      required: true,
    },
    searchPlaceholder: {
      type: String,
      required: false,
      default: "輸入關鍵字",
    },
    items: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      searchQ: "",
    };
  },
  computed: {
    filteredItems() {
      if (!this.searchQ || this.searchQ.length === 0) return this.items;
      return this.items.filter((item) => {
        return item.indexOf(this.searchQ) > -1;
      });
    },
  },
  methods: {
    handleClearInput() {
      this.searchQ = "";
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-input > .el-input__inner {
  padding-left: 10px !important;
}
</style>
