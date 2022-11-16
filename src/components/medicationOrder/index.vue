<template>
  <div class="flex flex-col border-1 rounded border-hex-ebeef5">
    <panel-add-medication
      name="新增處方"
      :options="prescriptionOptions"
    ></panel-add-medication>

    <div class="flex flex-col gap1 overflow-y-auto">
      <panel-prescription
        :prescriptionType="0"
        :payType="0"
        :prescriptionID="1"
      ></panel-prescription>
      <panel-prescription
        :prescriptionType="0"
        :payType="1"
        :prescriptionID="2"
      ></panel-prescription>
      <panel-prescription
        :prescriptionType="1"
        :payType="1"
        :prescriptionID="1"
      ></panel-prescription>
    </div>
  </div>
</template>

<script>
import index from "./js";

export default {
  mixins: [index],
  name: "tcmMedicationOrder",
};
</script>

<style lang="scss" scoped>
</style>
