export default {
  props: ["data"],
  computed: {
    time() {
      if (this.data.time) {
        return [
          this.data.time.startedAt
            ? new Date(this.data.time.startedAt)
            : undefined,
          this.data.time.endedAt ? new Date(this.data.time.endedAt) : undefined,
        ];
      }
      return [undefined, undefined];
    },
  },
  data() {
    return {};
  },
};
