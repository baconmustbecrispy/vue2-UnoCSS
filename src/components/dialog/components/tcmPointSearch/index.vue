<template>
  <div class="flex flex-col gap4">
    <div class="flex gap4 items-center">
      <span class="font700 shrink-0">{{ categoryTitle }}:</span>
      <el-radio-group
        v-model="categorySelect"
        class="flex shrink-0 gap2 mx2"
        @click="searchQ = ''"
      >
        <el-radio :label="0" class="m0 p0">{{ categories[0] }}</el-radio>
        <el-radio :label="1" class="m0 p0">{{ categories[1] }}</el-radio>
      </el-radio-group>
      <span class="font700 shrink-0">{{ searchTitle }}:</span>
      <el-input
        v-model="searchQ"
        :placeholder="searchPlaceholder"
        suffix-icon="el-icon-search"
        @keyup.esc="handleClearInput"
      />
    </div>

    <div class="flex gap2 items-center pb2 flex-wrap shrink-0">
      <template v-if="categorySelect === 0">
        <span class="font700 shrink-0 sticky left-0 bg-white z1 py2 pr2"
          >經絡:</span
        >
        <el-button class="!m0 !p2 font700" @click="handleFilterMeridian()"
          >全部</el-button
        >
        <el-button
          v-for="(m, i) in meridian"
          class="!m0 !p2 font700"
          :key="m.name + i"
          @click="handleFilterMeridian(m.name)"
        >
          {{ m.name }}
        </el-button>
      </template>
      <template v-if="categorySelect === 1">
        <span class="font700 shrink-0 sticky left-0 bg-white z1 py2 pr2"
          >部位:</span
        >
        <el-button class="!m0 !p2 font700" @click="handleFilterPart()"
          >全部</el-button
        >
        <el-button
          v-for="(p, i) in parts"
          class="!m0 !p2 font700"
          :key="p.name + i"
          @click="handleFilterPart(p.name)"
        >
          {{ p.name }}
        </el-button>
      </template>
    </div>

    <div class="overflow-auto flex-1 points-pane-content">
      <template v-if="categorySelect === 0">
        <div v-for="part in filteredMeridianPoints" class="flex flex-col">
          <div
            class="rounded-xl bg-hex-7b8797 w-fit my4 px2 py1 text-white text-sm"
            v-if="part.points.length > 0"
          >
            {{ part.name }}
          </div>
          <div class="flex flex-wrap gap2">
            <el-button
              v-for="(point, i) in part.points"
              class="rounded bg-hex-4e82dc !m0 !px2 !py1 text-white text-sm"
              :key="`0:${part}-${point} ${i}`"
              @click="$emit('evtAddItem', point)"
            >
              {{ point.name }}
            </el-button>
          </div>
        </div>
      </template>
      <template v-if="categorySelect === 1">
        <div v-for="part in filteredPartsPoints" class="flex flex-col">
          <div
            class="rounded-xl bg-hex-7b8797 w-fit my4 px2 py1 text-white text-sm"
            v-if="part.points.length > 0"
          >
            {{ part.name }}
          </div>
          <div class="flex flex-wrap gap2">
            <el-button
              v-for="(point, i) in part.points"
              class="rounded bg-hex-4e82dc !m0 !px2 !py1 text-white text-sm"
              :key="`1:${part}-${point} ${i}`"
              @click="$emit('evtAddItem', point)"
            >
              {{ point.name }}
            </el-button>
          </div>
        </div>
      </template>
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
      required: false,
      default: "穴位名稱",
    },
    categoryTitle: {
      type: String,
      required: false,
      default: "分類類型",
    },
    categories: {
      type: Array,
      required: false,
      default: function () {
        return ["經絡", "部位"];
      },
    },
    meridianTitle: {
      type: String,
      required: false,
      default: "經絡",
    },
    searchPlaceholder: {
      type: String,
      required: false,
      default: "輸入關鍵字",
    },
    parts: {
      type: Array,
      required: true,
    },
    meridian: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQ: "",
      categorySelect: 0,
      partSelect: undefined,
      meridianSelect: undefined,
    };
  },
  computed: {
    filteredParts() {
      if (!this.partSelect || this.partSelect.length === 0) return this.parts;
      return this.parts.filter((p) => {
        return p.name.indexOf(this.partSelect) > -1;
      });
    },
    filteredPartsPoints() {
      if (!this.searchQ || this.searchQ.length === 0) return this.filteredParts;

      return this.filteredParts.map((item) => {
        return {
          ...item,
          points: item.points.filter((p) => {
            return p.name.indexOf(this.searchQ) > -1;
          }),
        };
      });
    },
    filteredMeridian() {
      if (!this.meridianSelect || this.meridianSelect.length === 0)
        return this.meridian;
      return this.meridian.filter((m) => {
        return m.name.indexOf(this.meridianSelect) > -1;
      });
    },
    filteredMeridianPoints() {
      if (!this.searchQ  || this.searchQ.length === 0)
        return this.filteredMeridian;

      return this.filteredMeridian.map((item) => {
        return {
          ...item,
          points: item.points.filter((p) => {
            return p.name.indexOf(this.searchQ) > -1;
          }),
        };
      });
    },
  },
  methods: {
    handleClearInput() {
      this.searchQ = "";
    },
    handleFilterPart(p = undefined) {
      this.partSelect = p;
    },
    handleFilterMeridian(m = undefined) {
      this.meridianSelect = m;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-input > .el-input__inner {
  padding-left: 10px !important;
}
</style>
