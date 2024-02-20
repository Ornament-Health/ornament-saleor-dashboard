import { DiscoutFormData } from "@dashboard/discounts/types";

export const initialFormValues: DiscoutFormData = {
  name: "",
  description: "",
  dates: {
    endDate: "",
    endTime: "",
    hasEndDate: false,
    startDate: "",
    startTime: "",
  },
  rules: [],
};
