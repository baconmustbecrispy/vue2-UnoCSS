import panelAddMedication from "../components/panelAddMedication";
import panelPrescription from "../components/panelPrescription";

export default {
  components: {
    panelAddMedication,
    panelPrescription,
  },
  data() {
    return {
      prescriptionOptions: [
        { key: "insurance", name: "健保" },
        { key: "self", name: "自費" },
        { key: "drink", name: "飲片" },
      ],
    };
  },
};
