import tcmDoctorOrderItem from "../components/doctorOrderItem";
import tcmDoctorOrderTraumaDialog from "../../dialog/traumaDialog";
import tcmDoctorOrderAcupunctureDialog from "../../dialog/acupunctureDialog";


export default {
  components: {
    tcmDoctorOrderItem,
    tcmDoctorOrderTraumaDialog,
    tcmDoctorOrderAcupunctureDialog
  },
  data() {
    return {
      popup: {
        traumaDialogVisible: false,
        acupunctureDialogVisible: false,
      },
      collapseActives: [0, 1, 2],
      orderData: [
        {
          title: "B40 針灸 - 另開內服藥",
          items: [
            {
              type: "針灸穴位",
              parts: ["左肩", "左上肢"],
              niddleCount: 6,
              acupuncturePoints: [
                "然谷",
                "取泉",
                "太乙",
                "天井",
                "三焦俞",
                "足五里(左)",
              ],
              methods: undefined,
              time: {
                startedAt: "2022-11-12T11:38:00",
                endedAt: "2022-11-12T11:45:00",
              },
              show: () => {
                return this.openAcupunctureDialog();
              }
            },
          ],
        },
        {
          title: "E01 一般傷科 - 另開內服藥",
          items: [
            {
              type: "傷科處理",
              parts: ["腰"],
              niddleCount: undefined,
              acupuncturePoints: undefined,
              methods: ["理筋手法", "熱敷", "推拿", "外敷萬靈膏"],
              time: {
                startedAt: "2022-11-12T14:37:00",
                endedAt: "2022-11-12T14:57:00",
              },
              show: () => {
                return this.openTraumaDialog();
              }
            },
          ],
        },
        {
          title: "F01 一般針灸合併一般傷科 - 另開內服藥",
          items: [
            {
              type: "針灸穴位",
              parts: ["左肩", "左上肢"],
              niddleCount: 5,
              acupuncturePoints: ["然谷", "取泉", "太乙", "天井", "三焦俞"],
              methods: undefined,
              time: undefined,
              show: () => {
                return this.openAcupunctureDialog();
              }
            },
            {
              type: "傷科處理",
              parts: ["腰"],
              niddleCount: undefined,
              acupuncturePoints: undefined,
              methods: ["理筋手法", "熱敷", "推拿", "外敷萬靈膏"],
              time: undefined,
              show: () => {
                return this.openTraumaDialog();
              }
            },
          ],
        },
      ],
      styleStatus: {
        doctorOrderZoom: false,
      },
      toolbar: [
        {
          tooltip: "放大編輯",
          icon: "icon-ym icon-ym-full-screen1",
          show: () => {
            return !this.styleStatus.doctorOrderZoom;
          },
          event: () => {
            this.styleStatus.doctorOrderZoom = true;
          },
        },
        {
          tooltip: "縮小編輯",
          icon: "icon-ym icon-ym-compress-screen1",
          show: () => {
            return this.styleStatus.doctorOrderZoom;
          },
          event: () => {
            this.styleStatus.doctorOrderZoom = false;
          },
        },
      ],
    };
  },
  methods: {
    openTraumaDialog() {
      this.$set(this.popup, 'traumaDialogVisible', true)
    },
    closeTraumaDialog() {
      this.$set(this.popup, 'traumaDialogVisible', false)
    },
    openAcupunctureDialog() {
      this.$set(this.popup, 'acupunctureDialogVisible', true)
    },
    closeAcupunctureDialog() {
      this.$set(this.popup, 'acupunctureDialogVisible', false)
    },
  }
};
