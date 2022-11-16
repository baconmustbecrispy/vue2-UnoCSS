<template>
  <el-dialog width="75%" top="20vh" :visible.sync="visible" :before-close="goBack"
             lock-scroll :show-close="false"
  >
    <div class="m2 p2 border-1 rounded border-black/25 flex flex-col">
      <span class="p2 text-2xl font700">{{ title }}</span>

      <div class="flex overflow-hidden">
        <!-- 左側 -->
        <div class="flex flex-col justify-between flex-1 overflow-hidden">
          <el-tabs v-model="curStep" class="p2 flex-1 overflow-y-hidden">
            <el-tab-pane
              :label="tabs[0]"
              :name="'0'"
              class="overflow-y-auto"
              :style="styleContentHeight"
            >
              <tcmPartSearch
                searchTitle="部位名稱"
                :items="parts"
                @evtAddItem="handleAddItem"
              ></tcmPartSearch>
            </el-tab-pane>

            <el-tab-pane
              :label="tabs[1]"
              :name="'1'"
              class="overflow-y-auto"
              :style="styleContentHeight"
            >
              <tcmPartSearch
                searchTitle="名稱"
                :items="methods"
                @evtAddItem="handleAddItem"
              ></tcmPartSearch>
            </el-tab-pane>
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
                    icon="el-icon-delete-solid"
                    size="mini"
                    @click="handleRemoveItem(item)"
                  >
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
                      v-if="item.options"
                      v-for="item in item.options"
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
            <el-button v-if="+curStep === 1" type="success" @click="handleClickConfirm"> 完成</el-button>
            <el-button type="danger" @click="handleCancel"> 取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import index from './js'

export default {
  mixins: [index],
  name: 'tcmTraumaDialog'
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 1rem;

    .el-tabs__header {
      padding: 0.25rem;
      margin: 0 0 0.5rem 0;

      .el-tabs__item {
        font-size: 1.25rem !important;
        line-height: 1.75rem !important;
      }
    }

    .el-tabs__content {
      padding: 0.25rem;
    }
  }

}
</style>
