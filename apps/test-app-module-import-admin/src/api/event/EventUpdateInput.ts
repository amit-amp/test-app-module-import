import { AttendeeUpdateManyWithoutEventsInput } from "./AttendeeUpdateManyWithoutEventsInput";
import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  attendees?: AttendeeUpdateManyWithoutEventsInput;
  description?: string;
  endDate?: Date;
  eventType?: "Tech" | "Design" | null;
  location?: string;
  name?: string;
  sessions?: SessionUpdateManyWithoutEventsInput;
  startDate?: Date;
};
