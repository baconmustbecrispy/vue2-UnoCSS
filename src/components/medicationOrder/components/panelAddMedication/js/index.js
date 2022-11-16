export default {
  props: ["options", "name"],
  data() {
    return {
      styleStatus: {
        medicationOrderZoom: false,
      },
      toolbar: [
        {
          tooltip: "放大編輯",
          icon: "icon-ym icon-ym-full-screen1",
          show: () => {
            return !this.styleStatus.medicationOrderZoom;
          },
          event: () => {
            this.styleStatus.medicationOrderZoom = true;
          },
        },
        {
          tooltip: "縮小編輯",
          icon: "icon-ym icon-ym-compress-screen1",
          show: () => {
            return this.styleStatus.medicationOrderZoom;
          },
          event: () => {
            this.styleStatus.medicationOrderZoom = false;
          },
        },
      ],
    };
  },
};
