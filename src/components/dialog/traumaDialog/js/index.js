import tcmPartSearch from "../../components/tcmPartSearch";

export default {
  components: {
    tcmPartSearch,
  },
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: true
    },
    title: {
      type: String,
      required: false,
      default: "傷科處理",
    },
    itemsTitle: {
      type: String,
      required: false,
      default: "項目",
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
      tabs: ["部位", "處置/手法"],
      items: new Set(),
      parts: [
        "頭",
        "頸",
        "前軀幹",
        "後軀幹",
        "背",
        "腰",
        "股",
        "左上肢",
        "左指",
        "左腕",
        "左肘",
        "左上臂",
        "左下臂",
        "左肩",
        "右上肢",
        "右指",
        "右腕",
        "右肘",
        "右上臂",
        "右下臂",
        "右肩",
        "左下肢",
        "左趾",
        "左踝",
        "左膝",
        "左大腿",
        "左小腿",
        "右下肢",
        "右趾",
        "右踝",
        "右膝",
        "右大腿",
        "右小腿",
      ],
      methods: [
        "推法",
        "拿法",
        "按法",
        "摩法",
        "揉法",
        "點法",
        "擠法",
        "拉法",
        "抖法",
        "扣法",
        "背法",
        "滾法",
        "捻法",
        "搓法",
        "壓法",
        "散法",
        "拍法",
        "打法",
        "劈法",
        "揉擦法",
        "拿捏法",
        "擊打法",
        "彈筋法",
        "點穴法",
        "搖揉法",
        "撥壓法",
        "整理法",
        "捋筋法",
        "扣擠法",
        "刮筋法",
        "拔伸牽引",
        "舒筋活絡",
        "脫臼復位",
        "屈伸關節",
        "活絡關節",
        "內收外展",
        "端提捺正",
        "旋轉搖晃",
        "提按端擠",
        "搖擺觸碰",
        "夾擠分骨",
        "折頂回旋",
        "旋轉回繞",
        "按壓踩蹻",
        "彈撥麻筋",
        "推拿牽引",
        "局部放血",
        "冰敷",
        "外敷",
        "熱敷",
        "薰洗",
        "拔罐",
        "拔火罐",
      ],
    };
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
    handleCancel() {
      this.handleCleanCart();
      this.goBack();
    },
    handleClickConfirm() {
      this.goBack()
    },
    handleAddItem(item) {
      this.items.add({ name: item });
      this.$forceUpdate();
    },
    handleRemoveItem(item) {
      this.items.delete(item);
      this.$forceUpdate();
    },
    handleCleanCart(item) {
      this.items.clear();
      this.$forceUpdate();
    },
  },
};
