import tcmDoctorOrderItemContent from "../../doctorOrderItemContent";

export default {
  components: {
    tcmDoctorOrderItemContent,
  },
  props: ["orderName", "orderData"],
  data() {
    return {
      doctorOrderCount: undefined,
      doctorOrderInsuranceType: "自費",
      doctorOrderPayment: undefined,
    };
  },
};
