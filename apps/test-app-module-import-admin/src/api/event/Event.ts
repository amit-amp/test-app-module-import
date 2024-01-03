import { Attendee } from "../attendee/Attendee";
import { Session } from "../session/Session";

export type Event = {
  attendees?: Array<Attendee>;
  description: string;
  endDate: Date;
  eventType?: "Tech" | "Design" | null;
  id: string;
  location: string;
  name: string;
  sessions?: Array<Session>;
  startDate: Date;
};
