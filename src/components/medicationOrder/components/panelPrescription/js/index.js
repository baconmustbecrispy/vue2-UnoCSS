import icon_hide from "@/assets/eye-slash-solid.svg";
// import { ComMedBasicView } from "@/views/his7/emr/api";

export default {
  props: {
    payType: {
      type: Number,
      required: true,
      default: 0,
    },
    prescriptionType: {
      type: Number,
      required: true,
      default: 0,
    },
    prescriptionID: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      // Common
      // lovConfig: {
      //   type: "scroll",
      //   placeholder: "請輸入藥囑",
      //   apiUrl: ComMedBasicView,
      //   lovQueryColume: {
      //     keyword: "",
      //   },
      //   lovColumeList: [
      //     {
      //       label: "",
      //       content: "medCode",
      //     },
      //     {
      //       label: "",
      //       content: "medDesce",
      //     },
      //   ],
      //   optionLable: "medCode",
      //   optionValue: "medCode",
      // },
      query: {
        keyword: "",
      },

      // TCM Custom
      icon: {
        hide: icon_hide,
      },
      payTypes: ["健保", "自費"],
      // payType: 1,
      prescriptionTypes: ["一般", "飲片"],
      // prescriptionType: 0,
      // prescriptionID: 1,

      isContinuousPrescription: true,

      prescriptionPack: 3,
      prescriptionDay: undefined,
      prescriptionNotes: undefined,

      prescriptionPackageTypes: ["分包", "不分包"],
      prescriptionPackageType: 0,

      prescriptionPerDoesInCC: undefined,
      prescriptionDecocMinutes: undefined,
      prescriptionDecocWaterTotal: undefined,
      prescriptionDecocWaterLeft: undefined,
      prescriptionDecocNote: undefined,

      // 飲片專用

      drinkTypes: ["溫服", "熱服", "涼服", "外用"],
      drinkType: 0,

      decoctionServiceEnable: true,
      decoctionServiceCharge: true,
      decoctionServiceNotice: true,
      decoctionServiceCustomPriceOptions: ["否", "單包", "總價"],
      decoctionServiceCustomPriceOption: 0,
      decoctionServiceCustomPrice: 1500,
      decoctionServiceHidePrescription: true,
      decoctionServicePrescriptionName: "",

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],

      /* Temp Data */
      tmpTableData: [
        {
          prescription: "M藥",
          does: 0.5,
          unit: "克",
          pricePerUnit: 2,
        },
        {
          prescription: "N藥",
          does: 0.3,
          unit: "克",
          pricePerUnit: 10,
        },
      ],
    };
  },
  computed: {
    // 門診否
    isOer() {
      return this.oeiType === "O";
    },
    //
    prescriptionTable() {
      return this.tmpTableData.map((i) => {
        return { ...i, totalPrice: i["does"] * i["pricePerUnit"] };
      });
    },
  },
  methods: {
    lovEvent(obj) {
      if (obj) {
        this.$emit("pushPHM", obj);
        this.$nextTick(() => {
          this.drugTable.scrollTop = this.drugTable.scrollHeight;
          this.query.keyword = undefined;
        });
      }
    },
    renderHeader(h, { column }) {
      return h(
        "el-button",
        {
          props: {
            size: "mini",
            type: "primary",
            class: "text-xs m0 py1 px2",
            style: "height: 28px",
          },
        },
        column.label
      );
    },
  },
};
