type EventType = "Appointment" | "webinar";
type Client = {
  name: string;
  profile_url: string;
};
type Event = {
  id: number;
  title: string;
  time_start: string;
  time_end: string;
  event_type: EventType;
  client?: Client;
  video_call_link?: string;
};

export const data: Event[] = [
  {
    id: 1,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
  },
  {
    id: 2,
    title: "Webinar: How to cope with trauma in professional life",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "webinar",
  },
  {
    id: 2,
    title: "Webinar: How to cope with trauma in professional life",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "webinar",
    video_call_link: "https://videocall.com/session/2",
  },
];
