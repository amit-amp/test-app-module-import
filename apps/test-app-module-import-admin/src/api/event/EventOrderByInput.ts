import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  description?: SortOrder;
  endDate?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
};
