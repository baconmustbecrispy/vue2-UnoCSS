<template>
  <div class="flex flex-col border-1 p2 gap2 shrink-0">
    <el-row class="flex items-center">
      <div class="flex items-center">
        <el-button type="primary" size="mini" class="text-xs p-7px"
          >+</el-button
        >
        <el-button
          round
          size="mini"
          class="text-xs text-white"
          :class="{
            'bg-hex-e8833a': prescriptionType === 1,
            'bg-hex-2c88d9': prescriptionType !== 1,
          }"
        >
          {{ `${prescriptionTypes[prescriptionType]} ${prescriptionID}` }}
        </el-button>
        <div v-show="prescriptionType === 0" class="mx4 flex gap4">
          <el-radio
            v-model="payType"
            :label="0"
            size="mini"
            class="text-xs p0 m0"
            >健保</el-radio
          >
          <el-radio
            v-model="payType"
            :label="1"
            size="mini"
            class="text-xs p0 m0"
            >自費</el-radio
          >
          <el-checkbox
            v-show="prescriptionType === 0 && payType === 0"
            v-model="isContinuousPrescription"
            label="連續處方籤"
            size="mini"
          />
        </div>
        <el-button
          v-show="prescriptionType === 1"
          round
          size="mini"
          class="text-white mx4 bg-hex-4b5c6b"
          disabled
        >
          自費
        </el-button>
      </div>
      <div v-show="prescriptionType === 1" class="ml12 flex items-center gap4">
        <div class="mx4 flex items-center gap4">
          <span class="font700">代煎服務</span>
          <el-radio
            v-model="decoctionServiceEnable"
            :label="true"
            size="mini"
            class="text-xs p0 m0 mr2"
            >是</el-radio
          >
          <el-radio
            v-model="decoctionServiceEnable"
            :label="false"
            size="mini"
            class="text-xs p0 m0 mr2"
            >否</el-radio
          >
        </div>
        <div v-show="decoctionServiceEnable" class="flex items-center gap4">
          <div class="mx4 flex items-center gap4">
            <span class="font700">代煎費</span>
            <el-radio
              v-model="decoctionServiceCharge"
              :label="true"
              size="mini"
              class="text-xs p0 m0 mr2"
              >是</el-radio
            >
            <el-radio
              v-model="decoctionServiceCharge"
              :label="false"
              size="mini"
              class="text-xs p0 m0 mr2"
              >否
            </el-radio>
          </div>
          <div class="mx4 flex items-center gap4">
            <span class="font700">取藥提醒</span>
            <el-radio
              v-model="decoctionServiceNotice"
              :label="true"
              size="mini"
              class="text-xs p0 m0 mr2"
              >是</el-radio
            >
            <el-radio
              v-model="decoctionServiceNotice"
              :label="false"
              size="mini"
              class="text-xs p0 m0 mr2"
              >否
            </el-radio>
          </div>
        </div>
      </div>
      <div
        class="ml-auto mr24 flex gap4 items-center text-xs shrink-0"
        style="width: 360px"
      >
        <span>次量</span>
        <span>3.5</span>
        <span>日量</span>
        <span>10.5</span>
        <div v-show="payType === 1" class="ml8 flex gap4 items-center">
          <span>單日</span>
          <span>4</span>
          <span>總額</span>
          <span>20</span>
        </div>
      </div>
      <div>
        <el-button
          size="mini"
          icon="el-icon-delete"
          type="danger"
          class="px2 py2 m0"
        >
        </el-button>
      </div>
    </el-row>

    <el-row
      v-show="prescriptionType === 1"
      class="text-xs flex items-center gap4"
      style="margin-left: 17rem"
    >
      <div class="flex mx4 items-center gap4">
        <span class="font700">自訂金額</span>
        <el-radio-group
          v-model="decoctionServiceCustomPriceOption"
          class="mx4 flex items-center gap4"
        >
          <el-radio
            v-for="(item, index) in decoctionServiceCustomPriceOptions"
            :label="index"
            :key="item"
            size="mini"
            class="text-xs p0 m0 mr2"
          >
            {{ item }}
          </el-radio>
        </el-radio-group>
        <el-input-number
          v-model="decoctionServiceCustomPrice"
          :min="0"
          :controls="false"
          size="mini"
          class="w20"
        />
      </div>
      <el-checkbox
        v-model="decoctionServiceHidePrescription"
        label="隱藏處方詳情"
        size="mini"
        class="ml8"
      />
      <div class="flex items-center gap4 flex-1 ml16">
        <span class="shrink-0">處方名稱</span>
        <el-input
          v-model="decoctionServicePrescriptionName"
          size="mini"
          class="flex-1"
        />
      </div>
    </el-row>

    <el-row>
      <el-table :data="prescriptionTable" style="width: 100%; padding: 0;">
        <el-table-column width="32" class="flex items-center justify-center">
          <template slot-scope="scope" v-if="prescriptionType === 1">
            <img
              v-show="decoctionServiceHidePrescription"
              alt="hide"
              id="icon.hide"
              :src="icon.hide"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="prescription"
          :key="1"
          label="藥品"
          width="320"
          :render-header="renderHeader"
        />
        <el-table-column prop="does" :key="2" label="次量" width="80" />
        <el-table-column prop="unit" :key="3" label="單位" width="80" />
        <el-table-column
          v-if="payType === 1"
          prop="pricePerUnit"
          :key="4"
          label="單價"
          width="100"
        />
        <el-table-column
          v-if="payType === 1"
          prop="totalPrice"
          :key="5"
          label="金額"
          width="120"
        />
        <el-table-column>
          <template slot-scope="scope" v-if="prescriptionType === 1">
            <el-button size="mini" class="text-white mx4 bg-hex-2c88d9">
              處理方式
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!-- 輸入藥品 -->
    <!-- <el-row>
      <template>
        <LovSelect
          style="margin: 3px;
          position: relative;
          left: 0;"
          ref="lovSelect"
          :parent-value.sync="query.keyword"
          :lovConfig="lovConfig"
          @lovEvent="lovEvent"
        ></LovSelect>
      </template>
    </el-row> -->

    <el-row
      v-show="prescriptionType === 0"
      class="flex items-center bg-hex-d5e7f7"
    >
      <span class="mx2 font700">包數</span>
      <el-input-number
        v-model="prescriptionPack"
        :min="1"
        :controls="false"
        size="mini"
        class="my2 w18"
      />
      <span class="mx2 font700">天數</span>
      <el-input-number
        v-model="prescriptionDay"
        :controls="false"
        size="mini"
        class="my2 w18"
      />
      <span class="mx2 font700">包裝</span>
      <el-select v-model="prescriptionPackageType" class="m2 w24" size="mini">
        <el-option
          v-for="(item, index) in prescriptionPackageTypes"
          :key="item"
          :label="item"
          :value="index"
        />
      </el-select>
      <el-button type="primary" size="mini" class="mx4">
        <div class="flex gap2">
          <span>服法</span><i class="el-icon-arrow-right el-icon--right"></i>
        </div>
      </el-button>
      <span class="text-red">未設定</span>
      <div class="ml32 mx2 flex flex-1">
        <span class="mx2 flex items-center shrink-0">備註</span>
        <el-input v-model="prescriptionNotes" size="mini" class="my2" />
      </div>
    </el-row>

    <el-row v-show="prescriptionType === 1" class="flex flex-col bg-hex-fae6d8">
      <div class="flex items-center py2">
        <span class="mx2 font700">包數</span>
        <el-input-number
          v-model="prescriptionPack"
          :min="1"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2 font700">天數</span>
        <el-input-number
          v-model="prescriptionDay"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2 font700">一次</span>
        <el-input-number
          v-model="prescriptionPerDoesInCC"
          :min="0"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2">c.c.</span>
        <el-select v-model="drinkType" class="m2 w24 px2" size="mini">
          <el-option
            v-for="(item, index) in drinkTypes"
            :key="item"
            :label="item"
            :value="index"
          />
        </el-select>
        <el-button
          type="primary"
          size="small"
          class="mx4 text-white bg-hex-e8833a"
        >
          <div class="flex gap2">
            <span>服法</span><i class="el-icon-arrow-right el-icon--right"></i>
          </div>
        </el-button>
        <span>早晚飯後</span>
        <div class="ml32 mx2 flex flex-1">
          <span class="mx2 flex items-center shrink-0">備註</span>
          <el-input v-model="prescriptionNotes" size="mini" />
        </div>
      </div>
      <div class="flex items-center py2">
        <span class="mx2 font700">每日煎法</span>

        <span class="mx2 text-sm">每次</span>
        <el-input-number
          v-model="prescriptionDecocMinutes"
          :min="0"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2 text-sm">分鐘</span>

        <span class="mx2 text-sm">每次用水</span>
        <el-input-number
          v-model="prescriptionDecocWaterTotal"
          :min="0"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2 text-sm">c.c.</span>

        <span class="mx2 text-sm">煎存</span>
        <el-input-number
          v-model="prescriptionDecocWaterLeft"
          :min="0"
          :controls="false"
          size="mini"
          class="w18"
        />
        <span class="mx2 text-sm">c.c.</span>
        <div class="ml21 mx2 flex flex-1">
          <span class="mx2 flex items-center shrink-0">煎煮備註</span>
          <el-input v-model="prescriptionDecocNote" size="mini" />
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "panelPrescription",
};
</script>

<style lang="scss" scoped>
// .el-table ::v-deep .el-table__row td {
//   padding-top: 2px;
//   padding-bottom: 2px;
// }

// .el-table ::v-deep .el-table__header th {
//   padding-top: 2px;
//   padding-bottom: 2px;
// }

// .el-select {
//   & ::v-deep .el-input__inner {
//     padding-left: 10px !important;
//   }
// }

// ::v-deep .el-input > .el-input__inner {
//   padding-left: 10px !important;
// }

// .el-radio {
//   display: flex;
//   align-items: center;
//   flex-shrink: 0;

//   & ::v-deep .el-radio__label {
//     font-size: 12px !important;
//   }
// }

</style>
